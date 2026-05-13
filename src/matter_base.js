import { Engine, Body, Composite, Common, Bodies, Events, Query, Constraint, MouseConstraint, Mouse } from "matter-js";
import { spriteLookup } from "./assets/index.js";

const STYLE_SNIPPET = `
.fixed {
    position: fixed;
}

.inline {
    display: inline;
}
.round {
    border-radius: 100%;
}
.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
`;

let stylesInjected = false;

const injectStylesIfNeeded = () => {
    if (stylesInjected) {
        return;
    }
    const style = document.createElement("style");
    style.textContent = STYLE_SNIPPET;
    document.head.appendChild(style);
    stylesInjected = true;
};

const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;
const radiansToDegrees = (radians) => (radians * 180) / Math.PI;

const DEFAULT_GRAVITY = { x: 0, y: 1 };

let activeEngine = null;

const ensureActiveEngine = () => {
    if (!activeEngine) {
        throw new Error("MatterEngine has not been instantiated. Create an engine before adding elements.");
    }
    return activeEngine;
};

class MatterSprite {
    constructor(engine, element, options = {}, isGenerated = false, collection) {
        this.engine = engine;
        this.world = engine.world;
        this.el = element;
        this.element = element;
        this.isGenerated = isGenerated;
        this.collection = collection;

        this.el.style.display = "inline";
        this.el.setAttribute("draggable", "false");
        this.el.setAttribute("selectable", "false");
        this.el.classList.add("unselectable");
        this.el.style.position = "fixed";

        this.clientX = document.body.scrollWidth;
        this.clientY = document.body.scrollHeight;

        const startAngle = element.getAttribute("data-angle");
        const dataOptionsRaw = element.getAttribute("data-options");
        const dataOptions = dataOptionsRaw ? JSON.parse(dataOptionsRaw) : {};

        this.rect = element.getBoundingClientRect();
        this.centerX = this.rect.left + this.rect.width / 2;
        this.centerY = this.rect.top + this.rect.height / 2;
        this.width = this.rect.width;
        this.height = this.rect.height;

        this.mergedOptions = {
            friction: 0,
            restitution: 0.95,
            angle: startAngle ? degreesToRadians(Number(startAngle)) : 0,
            isStatic: false,
            ...options,
            ...dataOptions
        };

        this.health = "strength" in this.mergedOptions
            ? 10000 * this.mergedOptions.strength * 2
            : 10000;

        this.collection.push(this);
    }

    get_center_point() {
        return this.body?.position ?? { x: this.centerX, y: this.centerY };
    }

    get_angle() {
        return this.body?.angle ?? 0;
    }

    update() {
        if (!this.body?.position) {
            return;
        }

        const top = this.body.position.y - this.height / 2;
        const left = this.body.position.x - this.width / 2;

        const offScreen = left > this.clientX || left + this.width < 0 || top > this.clientY;
        if (offScreen) {
            return;
        }

        this.el.style.left = `${left}px`;
        this.el.style.top = `${top}px`;
        this.el.style.rotate = `${this.get_angle()}rad`;
    }

    deduct_health(value) {
        this.health -= value;
        if (this.health < 0) {
            this.el.src = spriteLookup.effect("explosion");
            setTimeout(() => {
                this.remove();
            }, 500);
        }
    }

    remove() {
        const index = this.collection.indexOf(this);
        if (index !== -1) {
            this.collection.splice(index, 1);
        }
        if (this.body) {
            Composite.remove(this.world, this.body);
        }
        if (this.isGenerated) {
            this.el.remove();
        } else {
            this.el.removeAttribute("data-matter-done");
        }
    }
}

class BlockSprite extends MatterSprite {
    constructor(engine, element, options = {}, isGenerated = false) {
        super(engine, element, options, isGenerated, engine.blocks);
        this.body = Bodies.rectangle(this.centerX, this.centerY, this.width, this.height, this.mergedOptions);
        this.body.ob = this;
        Composite.add(engine.world, this.body);
    }
}

class CircleSprite extends MatterSprite {
    constructor(engine, element, options = {}, isGenerated = false) {
        super(engine, element, options, isGenerated, engine.blocks);
        this.radius = this.width / 2;
        this.body = Bodies.circle(this.centerX, this.centerY, this.radius, this.mergedOptions);
        this.body.ob = this;
        Composite.add(engine.world, this.body);
    }

    get_angle() {
        return (this.body?.angle ?? 0) * 3;
    }
}

class ConstraintSprite extends MatterSprite {
    constructor(engine, anchorBody, anchorX, anchorY, element, options = {}, isGenerated = true) {
        super(engine, element, options, isGenerated, engine.constraints);
        this.anchorBody = anchorBody;
        this.anchorPoint = { x: anchorX, y: anchorY };
        element.style.zIndex = "-1";
        const dx = anchorX - anchorBody.position.x;
        const dy = anchorY - anchorBody.position.y;
        this.initialLength = Math.hypot(dx, dy);
        this.body = Constraint.create({
            pointA: { x: anchorX, y: anchorY },
            bodyB: anchorBody,
            pointB: { x: 0, y: 0 },
            length: this.initialLength,
            stiffness: 0.02,
            damping: 0.04
        });
        this.body.ob = this;
        Composite.add(engine.world, this.body);
    }

    get_distance() {
        const dx = this.anchorPoint.x - this.anchorBody.position.x;
        const dy = this.anchorPoint.y - this.anchorBody.position.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    get_angle() {
        return Math.atan2(
            this.anchorPoint.y - this.anchorBody.position.y,
            this.anchorPoint.x - this.anchorBody.position.x
        );
    }

    update() {
        const rawDistance = this.get_distance();
        const distance = Math.max(rawDistance, this.initialLength ? this.initialLength * 0.35 : 40);
        const centerY = (this.anchorPoint.y + this.anchorBody.position.y) / 2;
        const centerX = (this.anchorPoint.x + this.anchorBody.position.x) / 2;

        const top = centerY - this.height / 2;
        const left = centerX - distance / 2;

        const offScreen = left > this.clientX || left + distance < 0 || top > this.clientY;
        if (offScreen) {
            return;
        }

        this.el.style.width = `${distance}px`;
        this.el.style.left = `${left}px`;
        this.el.style.top = `${top}px`;
        this.el.style.rotate = `${this.get_angle()}rad`;
        this.el.style.background = "white";
    }
}

class MatterEngine {
    constructor({ onCollision, goalPhysics } = {}) {
        injectStylesIfNeeded();

        this.engine = Engine.create();
        this.world = this.engine.world;

        this.engine.gravity.x = DEFAULT_GRAVITY.x;
        this.engine.gravity.y = DEFAULT_GRAVITY.y;
        this.gravityProfile = {
            itemScale: 1,
            goalScale: 1
        };
        this.baseGravity = { ...DEFAULT_GRAVITY };
        this.goalPhysicsOptions = {
            angularVelocityScale: 1,
            angularDamping: 0,
            frictionAir: 0
        };
        this.goalGravityCompensationSuspended = false;
        this.suspendCompensationDuringOverrides = true;
        this.gravityOverrideToken = null;
        this.gravityOverrideTimer = null;

        this.blocks = [];
        this.constraints = [];
        this.goal = null;
        this.running = false;
        this.onCollision = onCollision ?? (() => {});

        activeEngine = this;

        this.mouseConstraint = this.createMouseConstraint();
        this.registerCollisionHandlers();
        this.loadStaticBodies();
        this.pendingStickyTimeout = null;
        if (goalPhysics) {
            this.configureGoalPhysics(goalPhysics);
        }
    }

    removeCollisionHandlers() {
        if (this.forwardEvent) {
            Events.off(this.engine, "collisionStart", this.forwardEvent);
            Events.off(this.engine, "collisionActive", this.forwardEvent);
            this.forwardEvent = null;
        }
    }

    createMouseConstraint() {
        const board = document.getElementById("game-board") ?? document.body;
        const mouse = Mouse.create(board);
        const constraint = MouseConstraint.create(this.engine, { mouse });
        Composite.add(this.world, constraint);
        return constraint;
    }

    registerCollisionHandlers() {
        const forwardEvent = (event) => {
            if (!this.onCollision) {
                return;
            }
            this.onCollision(event);
        };
        Events.on(this.engine, "collisionStart", forwardEvent);
        Events.on(this.engine, "collisionActive", forwardEvent);
        this.forwardEvent = forwardEvent;
    }

    loadStaticBodies() {
        const candidates = document.querySelectorAll("[data-matter]:not([data-matter-done])");
        candidates.forEach((element) => {
            element.setAttribute("data-matter-done", "");
            const type = element.getAttribute("data-matter");
            if (type === "rigid") {
                new BlockSprite(this, element, { isStatic: true }, false);
            } else if (type === "block") {
                new BlockSprite(this, element, { restitution: 0.4, friction: 0.23 }, false);
            } else if (type === "circle") {
                new CircleSprite(this, element, { density: 0.1, restitution: 1, friction: 0.1 }, false);
            }
        });
    }

    start() {
        if (this.running) {
            return;
        }
        this.running = true;

        const step = () => {
            if (!this.running) {
                return;
            }
            this.updateItems();
            this.checkGoalCollisions();
            Engine.update(this.engine);
            this.applyGoalGravityAdjustment();
            this.applyVelocityCaps();
            requestAnimationFrame(step);
        };

        step();
    }

    stop() {
        if (!this.running && this.blocks.length === 0 && this.constraints.length === 0) {
            return;
        }

        this.running = false;

        if (this.pendingStickyTimeout) {
            window.clearTimeout(this.pendingStickyTimeout);
            this.pendingStickyTimeout = null;
        }
        this.restoreStickyState();

        if (this.gravityOverrideTimer) {
            window.clearTimeout(this.gravityOverrideTimer);
            this.gravityOverrideTimer = null;
        }
        this.goalGravityCompensationSuspended = false;
        this.gravityOverrideToken = null;

        this.baseGravity = { ...DEFAULT_GRAVITY };
        this.gravityProfile = { itemScale: 1, goalScale: 1 };
        this.engine.gravity.x = this.baseGravity.x;
        this.engine.gravity.y = this.baseGravity.y;

        this.blocks.slice().forEach((block) => block.remove());
        this.constraints.slice().forEach((constraint) => constraint.remove());
        this.goal = null;

        this.removeCollisionHandlers();

        if (this.mouseConstraint) {
            Composite.remove(this.world, this.mouseConstraint);
            this.mouseConstraint = null;
        }

        if (activeEngine === this) {
            activeEngine = null;
        }
    }

    setGoal(goal) {
        this.goal = goal;
        this.applyGoalPhysicsSettings();
    }

    configureGoalPhysics(options = {}) {
        const defaults = {
            angularVelocityScale: 1,
            angularDamping: 0,
            frictionAir: 0
        };
        this.goalPhysicsOptions = {
            ...defaults,
            ...options
        };
        this.applyGoalPhysicsSettings();
    }

    applyGoalPhysicsSettings() {
        if (!this.goal?.body) {
            return;
        }
        const body = this.goal.body;
        if (typeof this.goalPhysicsOptions.frictionAir === "number") {
            body.frictionAir = this.goalPhysicsOptions.frictionAir;
        }
        if (typeof this.goalPhysicsOptions.angularDamping === "number") {
            body.angularDamping = this.goalPhysicsOptions.angularDamping;
        }
    }

    updateItems() {
        this.blocks.forEach((block) => block.update());
        this.constraints.forEach((constraint) => constraint.update());
    }

    applyGoalGravityAdjustment() {
        if (!this.goal || !this.goal.body || this.goalGravityCompensationSuspended) {
            return;
        }
        const itemScale = this.gravityProfile.itemScale ?? 1;
        const goalScale = this.gravityProfile.goalScale ?? itemScale;
        const diffScale = goalScale - itemScale;
        if (Math.abs(diffScale) < 0.001) {
            return;
        }
        const body = this.goal.body;
        const scale = this.engine.world.gravity?.scale ?? 0.001;
        const force = {
            x: body.mass * DEFAULT_GRAVITY.x * diffScale * scale,
            y: body.mass * DEFAULT_GRAVITY.y * diffScale * scale
        };
        Body.applyForce(body, body.position, force);
    }

    applyVelocityCaps() {
        const MAX_LINEAR_SPEED = 28;
        const MAX_ANGULAR_SPEED = 2.4;
        this.blocks.forEach((block) => {
            const body = block.body;
            if (!body) {
                return;
            }
            const velocity = body.velocity;
            const speed = Math.hypot(velocity.x, velocity.y);
            if (speed > MAX_LINEAR_SPEED) {
                const scale = MAX_LINEAR_SPEED / speed;
                Body.setVelocity(body, {
                    x: velocity.x * scale,
                    y: velocity.y * scale
                });
            }
            if (Math.abs(body.angularVelocity) > MAX_ANGULAR_SPEED) {
                Body.setAngularVelocity(body, Math.sign(body.angularVelocity) * MAX_ANGULAR_SPEED);
            }
        });
        if (this.goal?.body) {
            const body = this.goal.body;
            const angularScale = Math.max(0, this.goalPhysicsOptions.angularVelocityScale ?? 1);
            const maxGoalAngular = MAX_ANGULAR_SPEED * angularScale;
            if (maxGoalAngular > 0 && Math.abs(body.angularVelocity) > maxGoalAngular) {
                body.angularVelocity = Math.sign(body.angularVelocity) * maxGoalAngular;
            }
            const damping = this.goalPhysicsOptions.angularDamping ?? 0;
            if (damping > 0 && damping < 1) {
                body.angularVelocity *= 1 - damping;
            }
        }
    }

    checkGoalCollisions() {
        if (!this.goal || !this.onCollision) {
            return;
        }
        const collisions = Query.collides(this.goal.body, this.blocks.map((block) => block.body));
        if (collisions.length) {
            this.onCollision(collisions);
        }
    }

    getBodies() {
        return this.blocks.map((block) => block.body);
    }

    set_base_gravity(x = DEFAULT_GRAVITY.x, y = DEFAULT_GRAVITY.y) {
        this.baseGravity = { x, y };
        this.engine.gravity.x = x;
        this.engine.gravity.y = y;
    }

    reset_to_base_gravity() {
        this.engine.gravity.x = this.baseGravity.x;
        this.engine.gravity.y = this.baseGravity.y;
        if (!this.gravityOverrideTimer) {
            this.goalGravityCompensationSuspended = false;
        }
    }

    setGravityProfile({ itemScale = 1, goalScale = 1, suspendDuringOverrides = true } = {}) {
        this.gravityProfile = {
            itemScale,
            goalScale
        };
        this.baseGravity = {
            x: DEFAULT_GRAVITY.x * itemScale,
            y: DEFAULT_GRAVITY.y * itemScale
        };
        this.engine.gravity.x = this.baseGravity.x;
        this.engine.gravity.y = this.baseGravity.y;
        this.suspendCompensationDuringOverrides = suspendDuringOverrides !== false;
        this.goalGravityCompensationSuspended = false;
    }

    change_gravity(x, y, duration) {
        if (this.gravityOverrideTimer) {
            window.clearTimeout(this.gravityOverrideTimer);
            this.gravityOverrideTimer = null;
        }
        const token = Symbol("gravityOverride");
        this.gravityOverrideToken = token;
        if (this.suspendCompensationDuringOverrides) {
            this.goalGravityCompensationSuspended = true;
        }
        this.engine.gravity.x = x;
        this.engine.gravity.y = y;
        if (duration > 0) {
            this.gravityOverrideTimer = window.setTimeout(() => {
                if (this.gravityOverrideToken !== token) {
                    return;
                }
                this.reset_to_base_gravity();
                this.goalGravityCompensationSuspended = false;
                this.gravityOverrideTimer = null;
                this.gravityOverrideToken = null;
            }, duration);
        }
    }

    restoreStickyState() {
        this.blocks.forEach((block) => {
            const body = block.body;
            const backup = body?._stickyBackup;
            if (!body || !backup) {
                return;
            }
            body.friction = backup.friction;
            body.frictionAir = backup.frictionAir;
            body.restitution = backup.restitution;
            delete body._stickyBackup;
        });

        if (this.goal?.body?._stickyBackup) {
            const backup = this.goal.body._stickyBackup;
            this.goal.body.friction = backup.friction;
            this.goal.body.frictionAir = backup.frictionAir;
            this.goal.body.restitution = backup.restitution;
            delete this.goal.body._stickyBackup;
        }
    }

    make_sticky(duration, options = {}) {
        const {
            intensity = "high",
            frictionMultiplier = intensity === "high" ? 3.6 : 2.4,
            airDrag = intensity === "high" ? 0.18 : 0.12,
            velocityDamp = intensity === "high" ? 0.45 : 0.3,
            goalFriction = intensity === "high" ? 2.6 : 1.8
        } = options;

        this.restoreStickyState();
        if (this.pendingStickyTimeout) {
            window.clearTimeout(this.pendingStickyTimeout);
            this.pendingStickyTimeout = null;
        }

        this.blocks.forEach((block) => {
            const body = block.body;
            if (!body) {
                return;
            }
            if (!body._stickyBackup) {
                body._stickyBackup = {
                    friction: body.friction,
                    frictionAir: body.frictionAir ?? 0,
                    restitution: body.restitution ?? 0
                };
            }
            const baseFriction = body.friction ?? 0.2;
            body.friction = Math.min(baseFriction * frictionMultiplier + 0.25, 5);
            body.frictionAir = Math.min((body.frictionAir ?? 0) + airDrag, 0.4);
            body.restitution = Math.min(body.restitution ?? 0, 0.18);
            Body.setVelocity(body, {
                x: body.velocity.x * (1 - velocityDamp),
                y: body.velocity.y * (1 - velocityDamp)
            });
            Body.setAngularVelocity(body, body.angularVelocity * 0.4);
        });

        if (this.goal?.body) {
            const goalBody = this.goal.body;
            if (!goalBody._stickyBackup) {
                goalBody._stickyBackup = {
                    friction: goalBody.friction,
                    frictionAir: goalBody.frictionAir ?? 0,
                    restitution: goalBody.restitution ?? 0
                };
            }
            goalBody.friction = Math.min(goalFriction, 3.5);
            goalBody.frictionAir = Math.min((goalBody.frictionAir ?? 0) + airDrag * 0.5, 0.35);
            goalBody.restitution = Math.min(goalBody.restitution ?? 0, 0.18);
        }

        this.pendingStickyTimeout = window.setTimeout(() => {
            this.restoreStickyState();
            this.pendingStickyTimeout = null;
        }, duration);
    }

    shake(options = {}) {
        const config = typeof options === "number" ? { times: options } : options;
        const times = Math.max(1, Math.round(config.times ?? 3));
        const magnitudeScale = config.magnitude ?? 1;
        let current = 0;

        const applyForce = () => {
            this.blocks.forEach((block) => {
                const magnitude = 0.02 * block.body.mass * 3 * magnitudeScale;
                Body.applyForce(block.body, block.body.position, {
                    x: (magnitude + Common.random() * magnitude) * Common.choose([1, -1]),
                    y: -magnitude + Common.random() * -magnitude
                });
            });
            current += 1;
            if (current >= times) {
                window.clearInterval(interval);
            }
        };

        const intervalDelay = Math.max(180, 650 / magnitudeScale);
        const interval = window.setInterval(applyForce, intervalDelay);
        applyForce();
    }
}

const normaliseOptions = (options = {}) => {
    const { src, href, data, ...physicsOptions } = options;
    return {
        src,
        href,
        data,
        physicsOptions
    };
};

export const createElement = (
    tag = "div",
    x = 0,
    y = 0,
    width = "90px",
    height = "90px",
    options = {},
    bodyType = "circle",
    content = "",
    parent = document.getElementById("game-board") ?? document.body
) => {
    const engine = ensureActiveEngine();
    const { src, href, data, physicsOptions } = normaliseOptions(options);

    const parseDimension = (value) => {
        if (typeof value === "number") {
            return Math.abs(value);
        }
        if (typeof value === "string") {
            const parsed = Number.parseFloat(value.replace(/px$/, ""));
            return Number.isFinite(parsed) ? Math.abs(parsed) : null;
        }
        return null;
    };

    const widthValue = parseDimension(width);
    const heightValue = parseDimension(height);
    const minDimension = Math.max(Math.min(widthValue ?? 0, heightValue ?? 0), 1);
    const maxDimension = Math.max(widthValue ?? 0, heightValue ?? 0);
    const aspectRatio = minDimension > 0 ? maxDimension / minDimension : 1;
    const elongated = bodyType === "block" && aspectRatio >= 1.6;

    const element = document.createElement(tag);
    element.classList.add("inline", "fixed");
    if (bodyType !== "block") {
        element.classList.add("round");
    }
    if (content) {
        element.innerHTML = content;
    }
    parent.appendChild(element);

    element.style.width = width;
    element.style.height = height;
    element.style.position = "fixed";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    if (data) {
        Object.entries(data).forEach(([key, value]) => {
            element.setAttribute(`data-${key}`, value);
        });
    }
    if (src) {
        element.src = src;
    }
    if (href) {
        element.href = href;
    }

    const sprite = bodyType === "block"
        ? new BlockSprite(engine, element, physicsOptions, true)
        : new CircleSprite(engine, element, physicsOptions, true);

    sprite.aspectRatio = aspectRatio;
    sprite.isElongated = elongated;
    sprite.maxHealth = sprite.health;

    if (elongated) {
        const baseStrength = sprite.mergedOptions.strength ?? 0.5;
        const adjustedStrength = baseStrength * 0.7;
        sprite.mergedOptions.strength = adjustedStrength;
        sprite.health = 10000 * adjustedStrength * 2;
        sprite.maxHealth = sprite.health;
        if (sprite.body) {
            const currentRestitution = sprite.body.restitution ?? 0.2;
            const boostedRestitution = Math.min(currentRestitution * 1.4, 0.92);
            sprite.body.restitution = boostedRestitution;
            const currentFriction = sprite.body.friction ?? 0.1;
            sprite.body.friction = Math.max(currentFriction * 0.8, 0.02);
        }
        element.setAttribute("data-elongated", "true");
    }

    return sprite;
};

export const createConstraint = (
    joinObject,
    tag = "div",
    anchorX = 0,
    anchorY = 0,
    width = 10,
    parent = document.body
) => {
    const engine = ensureActiveEngine();
    const element = document.createElement(tag);
    element.classList.add("inline", "fixed");
    parent.appendChild(element);
    element.style.zIndex = "-1";

    const { x, y } = joinObject.get_center_point();
    const dx = anchorX - x;
    const dy = anchorY - y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    element.style.width = `${distance}px`;
    element.style.height = `${width}px`;
    element.style.position = "fixed";
    element.style.left = `${anchorX}px`;
    element.style.top = `${anchorY}px`;

    const constraint = new ConstraintSprite(engine, joinObject.body, anchorX, anchorY, element, {}, true);
    return constraint;
};

export { MatterEngine };
export const engine = MatterEngine;
export const create_element = createElement;
export const create_constraint = createConstraint;
export { DEFAULT_GRAVITY };
export { degreesToRadians as degrees_to_radians, radiansToDegrees as radians_to_degrees };
