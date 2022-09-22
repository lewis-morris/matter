import { Engine, Body, Composite, Bodies, Events, Query, Constraint, MouseConstraint, Mouse, Render } from 'matter-js'

let world
window["blocks"] = []
window["constraints"] = []

function randomIntFromInterval(min, max) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function add_script(val) {
    const style = document.createElement('style');
    style.textContent = val
    document.head.appendChild(style);
}


function degrees_to_radians(degrees) {
    let pi = Math.PI;
    return degrees * (pi / 180);
}
function radians_to_degrees(radians) {
    let pi = Math.PI;
    return radians * (180 / pi);
}

function matter_setup() {
    add_script(`
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
        
    `)
}

function create_constraint(join_el, typ = "div", x = 0, y = 0, width=10, par = document.body) {

    let distance
    let other_pos = join_el.get_center_point()
    let a = x - other_pos["x"];
    let b = y - other_pos["y"];    
    distance = Math.sqrt( a*a + b*b );

    let el = document.createElement(typ)

//     <svg height="100vh" width="100vw">
//   <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
//   Sorry, your browser does not support inline SVG.
// </svg>


    el.classList.add("inline", "fixed", "round")
    el.src = "./images/head_sprite/rye.png"
    par.appendChild(el)
    el.style.width = distance + "px";
    el.style.height = width + "px";
    el.style.position = "fixed";
    el.style.left = `${x}px`
    el.style.top = `${y}px`

    let block = new ConstraintO(join_el.body,x,y, el, {}, true)
    // Body.applyForce(block.body, { x: block.body.position.x, y: block.body.position.y }, { x: force, y: 0 })
    constraints.push(block)
    return block
}   
function create_element(typ = "div", x = 0, y = 0, width="90px", height="90px", options={},bods_type="circle", content = "", par = document.getElementById("game-board")) {
    let {src, href } = options
    let block 
    let el = document.createElement(typ)
    el.classList.add("inline", "fixed", "round")
    par.appendChild(el)
    el.style.width = width;
    el.style.height = height;
    el.style.position = "fixed";
    el.style.left = `${x}px`
    el.style.top = `${y}px`

    

    if("data" in options){
        Object.keys(options["data"]).forEach((key,index)=>{
            el.setAttribute("data-" + key, options["data"][key])
        })
    }
    if(src) el.src = src;

    if(bods_type=="block"){
        block = new Block(el, options, true)
        blocks.push(block)
        
    }else{
        block = new Circle(el, options, true)
        blocks.push(block)
        
    }
    return block
    // Body.applyForce(block.body, { x: block.body.position.x, y: block.body.position.y }, { x: force, y: 0 })
    
}    
class Objecto {

    constructor(el, options = {}, is_generated = false) {
        this.health = "strength" in options? 10000*options["strength"] : 100
        this.el = el
        this.el.style.display = "inline";
        this.el.setAttribute("draggable", "false")
        this.el.setAttribute("selectable", "false")
        this.el.classList.add("unselectable")
        // 
        this.clientX = document.body.scrollWidth
        this.clientY = document.body.scrollHeight
        this.is_generated = is_generated
        // get inital angle
        const start_angle = el.getAttribute("data-angle")
        
        // get data options
        const dOptions = JSON.parse(el.getAttribute("data-options")) || {}

        this.bb = el.getBoundingClientRect()
        this.el.style.position = "fixed";

        this.centerX = this.bb.left + this.bb.width / 2;
        this.centerY = this.bb.top + this.bb.height / 2;

        this.width = this.bb.width;
        this.height = this.bb.height

        // set options 
        this.merged_options = {
            ...{
                friction: 0,
                restitution: 0.95,
                angle: start_angle ? degrees_to_radians(Number(start_angle)) : 0,
                isStatic: false
            }, ...options, ...dOptions
        };

    }
    deduct_health(value){
        this.health -= value
        console.log(this.health)
        if(this.health < 0){
            this.el.src = "./images/explosion.png"
            setTimeout(()=>{
                this.remove()
            },500)
        }
    }
    get_center_point(){
        return this.body.position
    }
    get_angle = () => {
        return this.body.angle
    }
    update = () => {
        let top = this.body.position.y - this.height / 2
        let left = this.body.position.x - this.width / 2

        // check to see if off the page then kill
        let kill = left > this.clientX || left + this.width < 0 || top > this.clientY
        if (kill) {
            // this.remove()
        } else {
            // else move the element
            this.el.style.position = "fixed";
            this.el.style.left = `${left}px`
            this.el.style.top = `${top}px`
            this.el.style.rotate = `${this.get_angle()}rad`
        }
    }

    remove = () => {
        blocks = blocks.filter(x => x !== this)
        Composite.remove(world, this.body)
        if(this.is_generated){ 
            this.el.remove()
        }else{
            this.el.removeAttribute("data-matter-done")
        };
        
    }

}


class ConstraintO extends Objecto {
    constructor(other,x,y, ...params) {
        super(...params)
        this.body = Constraint.create({
            pointA: { x: x, y: y },
            bodyB: other,
            pointB: { x: 0, y: 0 },
            stiffness: 0.01,
            damping: 0.01
        });
        this.body["ob"] = this
        Composite.add(world, this.body)
        this.el.style.position = "fixed"
    }
    get_distance = () => {
        var a = this.body.pointA.x - this.body.bodyB.position.x;
        var b = this.body.pointA.y - this.body.bodyB.position.y;
        var c = Math.sqrt( a*a + b*b );
        return c
    }
    get_angle = () => {
        return Math.atan2(this.body.pointA.y - this.body.bodyB.position.y, this.body.pointA.x - this.body.bodyB.position.x);
    }
    update = () => {

        let distance = this.get_distance()

        let center_y = (this.body.pointA.y + this.body.bodyB.position.y) / 2
        let center_x = (this.body.pointA.x + this.body.bodyB.position.x) / 2

        let top = center_y - (this.height / 2)
        let left = center_x - (distance / 2)

        // let top = this.body.pointA.y - this.height * 2
        // let left = this.body.pointA.x - distance / 2

        // check to see if off the page then kill
        let kill = left > this.clientX || left + this.width < 0 || top > this.clientY
        if (kill) {
            // this.remove()
        } else {
            // else move the element
            this.el.style.width = distance
            this.el.style.position = "fixed";
            this.el.style.left = `${left}px`
            this.el.style.top = `${top}px`
            this.el.style.rotate = `${this.get_angle()}rad`
            this.el.style.background = "white";
            // this.el.style.zIndex= "-1"
        }
    }


}
class Block extends Objecto {
    constructor(...params) {
        super(...params)
        this.body = Bodies.rectangle(this.centerX, this.centerY, this.bb.width, this.bb.height, this.merged_options);
        this.body["ob"] = this
        Composite.add(world, this.body)
        this.el.style.position = "fixed"
    }

}
class Circle extends Objecto {
    constructor(...params) {
        super(...params)
        this.radius = this.width / 2;
        this.body = Bodies.circle(this.centerX, this.centerY, this.radius, this.merged_options);
        this.body["ob"] = this
        Composite.add(world, this.body)
    }
    get_angle = () => {
        return this.body.angle * 3
    }
}



function engine() {

    let running = false



    engine = Engine.create();
    window["matter_engine"] = engine
    world = engine.world
    blocks = []
    constraints = []

    engine.gravity.y = 1;
    engine.gravity.x = 0;


    // events
    
    Events.on(engine, 'collisionStart', function(event) {
        // change object colours to show those in an active collision (e.g. resting contact)
        event_function(event)
    });
    Events.on(engine, 'collisionActive', function(event) {
        // change object colours to show those in an active collision (e.g. resting contact)
        event_function(event)
    });

    const mouse = Mouse.create(document.getElementById("game-board"))
    const mouse_ops = { mouse: mouse }
    let mcst = MouseConstraint.create(engine, mouse_ops)
    Composite.add(world, mcst)


    const load_blocks = () => {
        // gets all the elements that are on the page already.
        document.querySelectorAll("[data-matter]:not([data-matter-done]").forEach(value => {
            value.setAttribute("data-matter-done","")
            if (value.getAttribute("data-matter") == "rigid") {
                blocks.push(new Block(value, { isStatic: true }, false));
            } else if (value.getAttribute("data-matter") == "block") {
                blocks.push(new Block(value, { restitution: 0.4, friction: 0.23 }, false));
            } else if (value.getAttribute("data-matter") == "circle") {
                blocks.push(new Circle(value, { density: 0.1, restitution: 1, friction: 0.1 }, false));
            }
        })

    }

    const update_items = () => {
        // used to update all items in the world.
        blocks.forEach(block => {
            block.update()
        })
        constraints.forEach(constraint => {
            constraint.update()
        })
    }
    const check_colisions = () => {
        if(goal_el){
            event_function(Query.collides(goal_el.body, get_bodies()) )
        }
        
    }
    function maybe_create() {
        // used to update all items in the world.
        blocks.forEach(block => {
            block.update()
        })
    }

    function change_gravity(x,y, time){
        engine.gravity.y = y;
        engine.gravity.x = x;
        setTimeout(()=>{
            engine.gravity.y = 1;
            engine.gravity.x = 0;
        },time)
    }



    function make_sticky(time){
        blocks.forEach(block => {
            block.body.old_friction = block.body.friction
            block.body.friction = 1
        })

        setTimeout(()=>{            
            blocks.forEach(block => {
                block.body.friction = block.body.old_friction
            })
        },time)
    }
    

    function start() {
        running = true

        load_blocks()

        const rerender = () => {
            // update items
            if (running) {
                update_items()
                // check collisions
                check_colisions()
                // update physics
                Engine.update(engine);
                // run again
                requestAnimationFrame(rerender);
            }
        }
        rerender()

    }


    function get_bodies(){
        let bods = []
        blocks.forEach(value =>{
            bods.push(value.body)
        })
        return bods
    }
    function stop() {
        running = false
        blocks.forEach(block => {
            block.remove()
        })
        constraints.forEach(constraint => {
            constraint.remove()
        })

    }

    return { start: start, stop: stop, change_gravity: change_gravity, make_sticky:make_sticky}
}

export { engine, create_element, create_constraint }