import { Composite, Bodies } from 'matter-js'

export class Object {

        constructor(world, el, options = {}, newEl=false){

            this.el = el
            this.el.style.display = "inline";            
            this.el.setAttribute("draggable", "false")
            this.el.setAttribute("selectable", "false")
            this.el.classList.add("unselectable")            
            // 
            this.clientX = document.body.scrollWidth
            this.clientY = document.body.scrollHeight

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
                },  ...options, ...dOptions
            };
         
        }


        update = () => {

            
            let top = this.body.position.y - this.height / 2
            let left = this.body.position.x - this.width / 2

            // check to see if off the page then kill
            let kill = left > this.clientX || left + this.width < 0 || top > this.clientY
            if(kill){
                this.remove()
            }else{
                // else move the element
                this.el.style.position = "fixed";
                this.el.style.left = `${left}px`
                this.el.style.top = `${top}px`
                this.el.style.rotate = `${this.body.angle}rad`
            }     
        }

        remove = () => {
            blocks = blocks.filter(x => x !== this)
            Composite.remove(world, this.body)
            this.el.remove()
        }

    }


    
    export class Block extends Object{
        constructor(...params){
            super(...params)
            this.body = Bodies.rectangle(this.centerX, this.centerY, this.bb.width, this.bb.height, this.merged_options);
            Composite.add(params[0], this.body)
            this.el.style.position = "fixed"
        }

    }
    export class Circle extends Object{
        constructor(...params){
            super(...params)
            this.radius = this.width / 2;
            this.body = Bodies.circle(this.centerX, this.centerY, this.radius, this.merged_options);                
            Composite.add(params[0], this.body)
        }
    }

    