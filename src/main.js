import { Engine, Body, Composite, Bodies, Events, Constraint, MouseConstraint, Mouse } from 'matter-js'
import './styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { create_element, create_constraint, engine } from "./matter_base"
// let ww = window.innerWidth
// let wh = window.innerHeight

window["engine"] = engine

let choose_character
let end_game
let left
let right
let start
let currentImage
let current_score
let stop
let game_funcs
let timeleft
let startscreen, endscreen

// page load bits

function move_char(left){
    // used to select the next character
    let active = document.querySelector(".spr-option:not(.d-none)")
    let next = document.querySelectorAll(".spr-option")

    let change = 0
    let i = 0
    next.forEach(value=>{
        if(value == active){
            if(i == next.length-1){
                change = next[0]
            }else{
                change = next[i+1]
            }           
        }
        i ++
    })

    active.classList.add("d-none")
    change.classList.remove("d-none")


}
function clear_board(){
    game_funcs.stop()
    choose_character.classList.add("active")
}
function start_games(){
    
    game_funcs = new window["engine"]()
    game_funcs.start()

    let center_val = document.body.clientWidth / 2
    
    let new_el = create_element("img", center_val,200,"100px","100px", {src: currentImage})
    create_constraint(new_el, "div", center_val, 0, 2)

    let bat = create_element("img", 100,200, "200px", "35px", {restitution:0.2, src: "./images/bat.png"}, "block")
    let knuckle = create_element("img", 100,200, "75px", "40px", {restitution:0.2, src: "./images/nuckle.png"}, "block")
    let mace = create_element("img", 100,200, "200px", "35px", {restitution:0.2, src: "./images/mace.png"}, "block")
    let brick = create_element("img", 100,200, "100px", "50px", {restitution:0.2, src: "./images/brick.png"}, "block")
    let brick1 = create_element("img", 100,200, "100px", "50px", {restitution:0.2, src: "./images/brick.png"}, "block")
    let brick2 = create_element("img", 100,200, "100px", "50px", {restitution:0.2, src: "./images/brick.png"}, "block")

    Events.on(engine, 'collisionActive', function(event) {
        var pairs = event.pairs;

        // change object colours to show those in an active collision (e.g. resting contact)
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            pair.bodyA
            pair.bodyB
        }
    });

    let start_time = new Date().getTime();
    let current_time
    timeleft = document.getElementById("timeleft")
    let interv = setInterval(()=>{
        // get current time
        current_time = new Date().getTime()
        //get difference 
        var distance = start_time - current_time;
        // calc hrs mins secs
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000) * -1;
        // update element
        timeleft.innerText = `00:${String(seconds).padStart(2,"0")}`
        
        //stop if finished 
        if(seconds > 2){
            console.log(distance)
            clearInterval(interv);
            show_end()
        }
    },200)
}
function show_end(score){
    startscreen.classList.add("d-none")
    endscreen.classList.remove("d-none")
    choose_character.classList.add("active")
    choose_character.querySelector(".score").innerText = current_score.innerText
}
function close_end(){
    startscreen.classList.remove("d-none")
    endscreen.classList.add("d-none")
    clear_board()
}
(function(){

    function decrease_floor(){
        if(screen.width < 450 ){
            document.querySelectorAll("[data-floor]").forEach(value=>{
                value.style.height = "20px"
            })
            document.querySelectorAll("[data-wall]").forEach(value=>{
                value.style.width = "20px"
            })
        }
    }
    window.addEventListener("load", ()=>{
        decrease_floor()
        choose_character = document.getElementById("choose_char")
        choose_character.classList.add("active")



        left = document.getElementById("char_left")
        right = document.getElementById("char_right")
        left.addEventListener("click", (e)=>{
            move_char(true)
        })
        right.addEventListener("click", (e)=>{
            move_char(false)
        })
        start = document.getElementById("start")

        start.addEventListener("click", ()=>{
            choose_character.classList.remove("active")
            let active = document.querySelector(".spr-option:not(.d-none)")
            currentImage = active.firstElementChild.src
            start_games()
        })
        document.getElementById("clear_board").addEventListener("click", clear_board)
        document.getElementById("restart").addEventListener("click", close_end)
        current_score = document.getElementById("score_current")
        startscreen = document.getElementById("start_screen")
        endscreen = document.getElementById("end_screen")
    })

})()



