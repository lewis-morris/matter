export const Sprites = {
    characters: {
        george: () => new URL("/images/head_sprite/george.png", import.meta.url).href,
        rob: () => new URL("/images/head_sprite/rob.png", import.meta.url).href,
        rob1: () => new URL("/images/head_sprite/rob1.png", import.meta.url).href,
        luke: () => new URL("/images/head_sprite/luke.png", import.meta.url).href,
        crazy: () => new URL("/images/head_sprite/crazy.png", import.meta.url).href,
        rye: () => new URL("/images/head_sprite/rye.png", import.meta.url).href,
        don: () => new URL("/images/head_sprite/don.png", import.meta.url).href,
        tam: () => new URL("/images/head_sprite/tam.png", import.meta.url).href,
        lewi: () => new URL("/images/head_sprite/lewi.png", import.meta.url).href,
        lewis: () => new URL("/images/head_sprite/lewis.png", import.meta.url).href,
        bald: () => new URL("/images/head_sprite/bald.png", import.meta.url).href,
        jake: () => new URL("/images/head_sprite/jake.png", import.meta.url).href,
        jakeAlt: () => new URL("/images/head_sprite/jakek.png", import.meta.url).href
    },
    weapons: {
        bat: () => new URL("/images/bat.png", import.meta.url).href,
        knuckle: () => new URL("/images/nuckle.png", import.meta.url).href,
        mace: () => new URL("/images/mace.png", import.meta.url).href,
        brick: () => new URL("/images/brick.png", import.meta.url).href,
        dildo: () => new URL("/images/dildo.png", import.meta.url).href,
        magnum: () => new URL("/images/magnum.png", import.meta.url).href,
        joint: () => new URL("/images/joint.png", import.meta.url).href,
        chair: () => new URL("/images/chair.png", import.meta.url).href,
        stella: () => new URL("/images/stella.png", import.meta.url).href,
        ball: () => new URL("/images/ball.png", import.meta.url).href,
        golf: () => new URL("/images/golf.png", import.meta.url).href,
        money: () => new URL("/images/dollar.png", import.meta.url).href
    },
    effects: {
        explosion: () => new URL("/images/explosion.png", import.meta.url).href
    },
    drops: {
        crate: () => new URL("/images/crate.png", import.meta.url).href
    }
};

export const spriteLookup = {
    character(name) {
        const key = String(name ?? "").toLowerCase();
        const match = Sprites.characters[key];
        return match ? match() : Sprites.characters.rye();
    },
    weapon(key) {
        const lookupKey = String(key ?? "").toLowerCase();
        const match = Sprites.weapons[lookupKey];
        return match ? match() : Sprites.weapons.stella();
    },
    effect(key) {
        if (key === "explosion") {
            return Sprites.effects.explosion();
        }
        return Sprites.effects.explosion();
    },
    drop(key) {
        const match = Sprites.drops[key];
        return match ? match() : Sprites.drops.crate();
    }
};
