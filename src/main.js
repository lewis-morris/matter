import './styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { create_element, create_constraint, engine } from "./matter_base"
// let ww = window.innerWidth
// let wh = window.innerHeight

window["engine"] = engine
window["matter_engine"] = null
window["event_function"] = null
window["goal_el"] = null

let choose_character
let end_game
let left
let right
let start
let currentImage
let current_score
let stop
let interv 

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
    // resets the game board and opens the screen
    clearInterval(interv)
    game_funcs.stop()
    choose_character.classList.add("active")
}
function update_score(score){
    // update the score of the hit
    current_score.innerText = Math.round(Number(current_score.innerText) + score)
}
function log_score(event){
    // console.log(event.name)
    if(event.name == "collisionActive"){
        event.pairs.forEach(pair =>{
            if(pair.bodyA !== pair.bodyB && (pair.bodyA.ob.el.hasAttribute("data-goal") || pair.bodyB.ob.el.hasAttribute("data-goal")) ){
                update_score(pair.collision.depth)
            }
        })
    }
}
function start_timer(){
    // gets dates etc
    let start_time = new Date().getTime();
    let current_time
    timeleft = document.getElementById("timeleft")
    interv = setInterval(()=>{
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
        if(seconds > 29){
            console.log(distance)
            clearInterval(interv);
            show_end()
        }
    },200)
}
function start_games(){
    // resets current score
    current_score.innerText = 0
    // sets the loggin function for collisions
    event_function = log_score
    // set the engine functions 
    game_funcs = new window["engine"]()
    // starts the game
    game_funcs.start()
    // gets the center screen value for client
    let center_val = document.body.clientWidth / 2
    // creates a goal element/ target
    window["goal_el"] = create_element("img", center_val,200,"100px","100px", {src: currentImage, data:{goal: "true"}})
    // attached it to a rope
    create_constraint(goal_el, "div", center_val, 25, 2)
    // creates weapons
    let bat = create_element("img", 100,200, "200px", "35px", {restitution:0.2, src: "./images/bat.png"}, "block")
    let knuckle = create_element("img", 100,200, "75px", "40px", {restitution:0.2, src: "./images/nuckle.png"}, "block")
    let mace = create_element("img", 100,200, "200px", "35px", {restitution:0.2, src: "./images/mace.png"}, "block")
    let brick = create_element("img", 100,200, "100px", "50px", {restitution:0.2, src: "./images/brick.png"}, "block")
    let brick1 = create_element("img", 100,200, "100px", "50px", {restitution:0.2, src: "./images/brick.png"}, "block")
    let brick2 = create_element("img", 100,200, "100px", "50px", {restitution:0.2, src: "./images/brick.png"}, "block")


    // starts the timer
    start_timer()
}
function show_end(score){
    // show the last screen with score etc
    startscreen.classList.add("d-none")
    endscreen.classList.remove("d-none")
    choose_character.classList.add("active")
    choose_character.querySelector(".score").innerText = current_score.innerText
}
function close_end(){
    // close end screen asnd restart
    startscreen.classList.remove("d-none")
    endscreen.classList.add("d-none")
    clear_board()
}
(function(){
    // setup stuff for page load
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



