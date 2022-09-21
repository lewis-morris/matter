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
let score_number = 0
let score_level = 0
let game_funcs
let timeleft
let startscreen, endscreen
let score_text 
let send_score
let yourname
let leader_board
let leader_board_button
let close_leader
let list_scores 
// page load bits
const start_money = 100
 
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
    score_number = score_number + score
    current_score.innerText = Math.round(score_number)
    if(score_number > 10000 && score_level == 0){
        window["goal_el"].el.src = window["goal_el"].el.src.replace(".png", "_1.png")
        score_level = 1 
    }else if(score_number > 20000 && score_level == 1){
        window["goal_el"].el.src = window["goal_el"].el.src.replace("_1.png", "_2.png")
        score_level = 2
    }
}
function log_score(event){
    // console.log(event.name)
    if(event.name == "collisionActive" || event.name == "collisionStart"){
        event.pairs.forEach(pair =>{
            if(pair.bodyA !== pair.bodyB && (pair.bodyA.ob.el.hasAttribute("data-goal") || pair.bodyB.ob.el.hasAttribute("data-goal")) ){
                if(!pair.bodyA.ob.el.hasAttribute("data-nopoints") && !pair.bodyB.ob.el.hasAttribute("data-nopoints")){
                    update_score(pair.collision.depth)
                }                
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
    send_score.classList.add("btn-outline-success")
    send_score.classList.remove("btn-outline-primary")
    send_score.innerText = "Send Score"
    send_score.classList.remove("disabled")
    score_text.innerText = ""
    score_number = 0
    score_level = 0 
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
    let brick2 = create_element("img", 100,200, "100px", "50px", {restitution:0.2, src: "./images/brick.png"}, "block")
    let dildo = create_element("img", 100,200, "30px", "95px", {restitution:0.2, src: "./images/dildo.png"}, "block")
    let chair = create_element("img", 100,200, "80px", "130px", {restitution:0.2, src: "./images/chair.png"}, "block")

    // starts the timer
    start_timer()
}
function show_score(){
    if(score_number < 500){
        score_text.innerText = "STATUS: You're shit at this"
    }else if(score_number < 1000){
        score_text.innerText = "STATUS: You're worse than Rob"
    }else if(score_number < 2500){
        score_text.innerText = "STATUS: Go home crying to mummy"
    }else if(score_number < 5000){
        score_text.innerText = "STATUS: Getting better, but below average"
    }else if(score_number < 10000){
        score_text.innerText = "STATUS: Now we're getting somewhere"
    }else if(score_number < 20000){
        score_text.innerText = "STATUS: That was a belter."
    }else if(score_number < 30000){
        score_text.innerText = "STATUS: High score territory."
    }else if(score_number < 40000){
        score_text.innerText = "STATUS: Are you cheating?"
    }else if(score_number < 50000){
        score_text.innerText = "STATUS: Hax0r"
    }else if(score_number < 100000){
        score_text.innerText = "STATUS: God Mode Activated"
    }
}

function ajax_with_func(url, httpType = "GET", func = null, is_json_response = true, send = null) {

    var xhttp = new XMLHttpRequest();
    let res
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if (is_json_response) {
                res = JSON.parse(this.response)
            } else {
                res = this.response
            }

            if (func) {
                func(res)
            }

        } else if (this.readyState === 4 && this.status !== 200) {
            if (is_json_response) {
                res = JSON.parse(this.response)
            } else {
                res = this.response
            }
        } else {
            console.log(this.readyState)
            //console.log(this.status)
            //console.log(this.statusText)
            //return this.responseText
        }
    };

    xhttp.open(httpType, url, true)
    if (send == null) {
        xhttp.send()
    } else {
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify(send))
    }

}





function send_score_to_server(){
    send_score.innerText = "Sending.."
    send_score.classList.add("disabled")
    ajax_with_func(`https://thecomputermade.me/scores?name=` + yourname.value + "&score=" + score_number, "PUT", ()=>{
        send_score.innerText = "Score Sent!!"
        send_score.classList.remove("btn-outline-success")
        send_score.classList.add("btn-outline-primary")
    },true)
}
function change_screen(screen="start", active=true){
    if(screen=="start"){
        startscreen.classList.remove("d-none")
        endscreen.classList.add("d-none")
        leader_board.classList.add("d-none")
    }else if(screen=="end"){
        startscreen.classList.add("d-none")
        endscreen.classList.remove("d-none")
        leader_board.classList.add("d-none")
    }else if(screen=="leader"){
        startscreen.classList.add("d-none")
        endscreen.classList.add("d-none")
        leader_board.classList.remove("d-none")
    }
    if(active){
        choose_character.classList.add("active")
    }else{
        choose_character.classList.remove("active")
    }
}
function show_end(score){
    // show the last screen with score etc
    show_score()
    change_screen("end")
    choose_character.querySelector(".score").innerText = current_score.innerText
}
function close_end(){
    // close end screen asnd restart
    change_screen("start", false)
    clear_board()
}
function load_leaderboard(){

    change_screen("leader", true)
    list_scores.innerHTML = ""
    
    ajax_with_func(`https://thecomputermade.me/scores`, "GET", (d)=>{

        let winner = d.scores[0].name
        let new_el = document.createElement("h3")
        list_scores.appendChild(new_el)
        new_el.innerHTML ="TOP SCORER - " + winner
        
        d.scores.forEach(value => {
            let new_el = document.createElement("div")
            list_scores.appendChild(new_el)
            new_el.classList.add("col-12", "border", "rounded", "shadow", "my-1")
            new_el.innerHTML = `<span class='fw-bolder'> ${value.name}</span> -  ${value.date} <br> SCORE: ${Math.round(value.score)}`
        })
    },true)

}

function close_leaderboard(){
    change_screen("leader", false)
    choose_character.classList.remove("active")
    leader_board.classList.add("d-none")
    startscreen.classList.remove("d-none")
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

    function set_up_start_screen(){
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
    }

    function setup_buttons_onscreen(){
        document.getElementById("clear_board").addEventListener("click", clear_board)
        document.getElementById("restart").addEventListener("click", close_end)
    }
    function setup_leader_board(){
        // leader board modal el
        leader_board = document.getElementById("leader_screen")
        // show leaderboard button
        leader_board_button = document.getElementById("leader_board_button")
        // close leaderboard button
        close_leader = document.getElementById("close_leader")
        // events for above
        leader_board_button.addEventListener("click", load_leaderboard)
        close_leader.addEventListener("click", close_leaderboard)
        // list_scores element (where the scores go)
        list_scores = document.getElementById("list_scores")
    }

    window.addEventListener("load", ()=>{

        // decrease floor size for mobile
        decrease_floor()
        // set modal screen 
        choose_character = document.getElementById("choose_char")
        // load screen
        change_screen(start)
        // set_up_start_screen
        set_up_start_screen()
        // set up buttons on play screen
        setup_buttons_onscreen()
        // global elements
        // score counter element
        current_score = document.getElementById("score_current")
        // start screen (choose character)
        startscreen = document.getElementById("start_screen")
        // end screenn (points)
        endscreen = document.getElementById("end_screen")
        // score text (i.e your a looser)
        score_text = document.getElementById("score_text")
        // send score button ( and send to server )
        send_score = document.getElementById("send")
        send_score.addEventListener("click", send_score_to_server)
        // the name input field 
        yourname = document.getElementById("your_name")
        // sets up the leaderboard bits
        setup_leader_board()
    })

})()



