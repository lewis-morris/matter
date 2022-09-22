import './styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { create_element, create_constraint, engine } from "./matter_base"
// let ww = window.innerWidth
// let wh = window.innerHeight

window["engine"] = engine
window["matter_engine"] = null
window["event_function"] = null
window["goal_el"] = null

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

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
let store
let shop_button
let powerup_section
let activate_powerup_button
let power_ups = [
    {"name":"Reverse Gravity","reverse_gravity":true, typ:"seconds"},
    {"name":"Double Gravity","double_gravity":true, typ:"seconds"},
    {"name":"No Gravity", "no_gravity": true, typ:"seconds"},
    {"name":"Air Drop", "air_drop":true, typ:"times"},
    {"name":"Sticky Things", "sticky_items":true, typ:"seconds"}
]
let current_powerup = power_ups[0]

class Money{
    constructor(){
        this.money = 100
        this.items = []
    }
    buy(ob){
        this.money -= ob.cost
        this.items.push(ob)
    }
    sell(ob){
        this.money += ob.cost
        this.items.remove(ob)
    }
}


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
            let goal = pair.bodyA.ob.el.hasAttribute("data-goal") || pair.bodyB.ob.el.hasAttribute("data-goal")            
            // checks to see if the goat head is being hit by something other than the head
            if(pair.bodyA !== pair.bodyB && (goal) ){
                // get the other element 
                let other = pair.bodyA.ob.el.hasAttribute("data-goal") ? pair.bodyB : pair.bodyA
                if(!pair.bodyA.ob.el.hasAttribute("data-nopoints") && !pair.bodyB.ob.el.hasAttribute("data-nopoints")){
                    // attach with the depth of collision * density of the attacker
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
        // check for powerup 
        // check_need_powerup()
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

function make_object(type){
    if(type=="bat"){
        create_element("img", 100,200, "200px", "35px", {restitution:0.2, src: "./images/bat.png"}, "block")
    }else if(type=="knuckle"){
        create_element("img", 100,200, "75px", "40px", {restitution:0.2, src: "./images/nuckle.png"}, "block")
    }else if(type=="mace"){
        create_element("img", 100,200, "200px", "35px", {restitution:0.2, src: "./images/mace.png"}, "block")
    }else if(type=="brick"){
        create_element("img", 100,200, "100px", "50px", {restitution:0.2, src: "./images/brick.png"}, "block")
    }else if(type=="dildo"){
        create_element("img", 100,200, "26px", "105px", {restitution:0.2, src: "./images/dildo.png"}, "block")
    }else if(type=="magnum"){
        create_element("img", 100,200, "26px", "105px", {restitution:0.2, src: "./images/magnum.png"}, "block")
    }else if(type=="joint"){
        create_element("img", 100,200, "30px", "72px", {restitution:0.2, src: "./images/joint.png"}, "block")
    }else if(type=="chair"){
        create_element("img", 100,200, "80px", "130px", {restitution:0.2, src: "./images/chair.png"}, "block")
    }else if(type=="stella"){
        create_element("img", 100,200, "37px", "90px", {restitution:0.2, src: "./images/stella.png"}, "block")
    }else if(type=="ball"){
        create_element("img", 100,200, "50px", "50px", {restitution:0.2, src: "./images/ball.png"}, "circle")
    }
}
function start_games(){

    // send play 
    send_play_to_server()
    // close powerup incase left open
    deactivate_powerup()

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
    let items = ["bat","knuckle","mace","brick","dildo","magnum","joint","stella","chair","ball"]
    items.forEach(value => {
        make_object(value)  
    })
      
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
    if(yourname.value == ""){
        yourname.classList.add("is-invalid")
    }else{
        yourname.classList.remove("is-invalid")
        send_score.innerText = "Sending.."
        send_score.classList.add("disabled")
        ajax_with_func(`https://thecomputermade.me/scores?name=` + yourname.value + "&score=" + score_number + "&uuid=" + localStorage.getItem('uuid'), "PUT", ()=>{
            send_score.innerText = "Score Sent!!"
            send_score.classList.remove("btn-outline-success")
            send_score.classList.add("btn-outline-primary")
        },true)
    }

}


function send_play_to_server(){
    if(yourname.value == ""){
        yourname.classList.add("is-invalid")
    }else{
        yourname.classList.remove("is-invalid")
        send_score.innerText = "Sending.."
        send_score.classList.add("disabled")
        ajax_with_func(`https://thecomputermade.me/plays?uuid=` + localStorage.getItem('uuid'), "PUT", ()=>{
           
        },true)
    }

}

function change_screen(screen="start", active=true){
    if(screen=="start"){
        endscreen.classList.add("d-none")
        leader_board.classList.add("d-none")
        store.classList.add("d-none")

        startscreen.classList.remove("d-none")
    }else if(screen=="end"){
        startscreen.classList.add("d-none")        
        leader_board.classList.add("d-none")
        store.classList.add("d-none")

        endscreen.classList.remove("d-none")
    }else if(screen=="leader"){
        update_plays()
        startscreen.classList.add("d-none")
        endscreen.classList.add("d-none")
        store.classList.add("d-none")

        leader_board.classList.remove("d-none")
    }else if(screen=="store"){
        startscreen.classList.add("d-none")
        endscreen.classList.add("d-none")
        leader_board.classList.add("d-none")

        store.classList.remove("d-none")
        let money_bags = new Money()        
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
function update_plays(){
    ajax_with_func(`https://thecomputermade.me/plays`, "GET", (d)=>{
        document.getElementById("playtimestotal").innerText = d.total_plays
    },true)
}

function close_leaderboard(){
    change_screen("leader", false)
    choose_character.classList.remove("active")
    leader_board.classList.add("d-none")
    startscreen.classList.remove("d-none")
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function check_powerup_number_set(){
    if(current_powerup.tpy== "seconds"){
        return randomIntFromInterval(2000, 15000)
    }else if(current_powerup.tpy== "times"){
        return randomIntFromInterval(5, 100)
    }
}
function run_current_powerup_function(){

    if(current_powerup.name == "Reverse Gravity"){
        return () => {game_funcs.change_gravity(0,-1, current_powerup.do_times)}
    }else if(current_powerup.name == "Double Gravity"){
        return () => {game_funcs.change_gravity(0,2.5, current_powerup.do_times)}
    }else if(current_powerup.name == "No Gravity"){
        return () => {game_funcs.change_gravity(0,0, current_powerup.do_times)}
    }else if(current_powerup.name == "Air Drop"){
        return () => {game_funcs.golf_spam(current_powerup.do_times)}
    }else if(current_powerup.name == "Sticky Things"){
        return () => {game_funcs.golf_spam(current_powerup.do_times)}
    }
}
function check_need_powerup(){
    if(randomIntFromInterval(1,30)==1 && !is_powerup_active()){
        current_powerup = power_ups[Math.floor(Math.random()*power_ups.length)];  
        current_powerup.do_times = check_powerup_number_set()      
        activate_powerup_button.innerText = current_powerup.name        
        activate_powerup()
    }
}
function do_powerup(){
    console.log(current_powerup.name)
    run_current_powerup_function()()
}
function is_powerup_active(){
    return powerup_section.classList.contains("active")
}
function activate_powerup(){
    powerup_section.classList.add("active")
}
function deactivate_powerup(){
    powerup_section.classList.remove("active")
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
    function setup_shop(){
        store = document.getElementById("store")
        shop_button = document.getElementById("goto_shop")
        shop_button.addEventListener("click", ()=>{
            change_screen("store")
        })
        
    }


    function setup_powerups(){
        // powerup section
        powerup_section = document.getElementById("powerup_section")
        activate_powerup_button = document.getElementById("activate_powerup")
        activate_powerup_button.addEventListener("click", ()=>{
            do_powerup()
            deactivate_powerup()       
        })
    }
    function check_uuid(){
        if(!localStorage.getItem('uuid')) localStorage.setItem('uuid', uuidv4());
    }
    
    window.addEventListener("load", ()=>{
        // check_uuid
        check_uuid()
        // decrease floor size for mobile
        decrease_floor()
        // set modal screen 
        choose_character = document.getElementById("choose_char")       
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
        // setup shop
        setup_shop()        
        // score text (i.e your a looser)
        score_text = document.getElementById("score_text")
        // send score button ( and send to server )
        send_score = document.getElementById("send")
        send_score.addEventListener("click", send_score_to_server)
        // the name input field 
        yourname = document.getElementById("your_name")
        // sets up the leaderboard bits
        setup_leader_board()
        // load screen
        change_screen(start)
        // setup powerup buttons
        setup_powerups()
    })

})()



