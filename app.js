var day = 1
var hunger = 100
var health = 100
var energy = 100
var death = 0
var cash = 1000
var difficulty_multiplier = 1
var days_multiplier = 1

//onclick.restart()
    function restart() {
        day = 1
        hunger = 100
        health = 100
        energy = 100
        difficulty_multiplier = 1
        days_multiplier = 1
        cash = 1000
        console.log('Game restarted')
        update()
    return
    }

//onclick.next_day()
    function next_day() {
        //alert ('test msg')
        function randomizer(min, max) {
            return Math.floor(Math.random() * ((max - min + 1)* difficulty_multiplier * days_multiplier)) + min
        }
        day = day + 1
        hunger = Math.round(hunger - randomizer(10,20))
        health = Math.round(health - randomizer(5,10))
        energy = Math.round(energy - randomizer(15,23))
        days_multiplier = days_multiplier + 0.05
        if (hunger > 100)
            hunger = 100
        if (health > 100)
            health = 100
        if (energy > 100)
            energy = 100        
        difficulty_multiplier = 1
        console.log('DAY SKIPPED')
        update()
        return
    }

function update() {
    if (health < 1 || hunger < 1 || energy <1) {
        alert('Вы умерли')
        restart()
    }    
    document.getElementById("days_counter").innerHTML = day
    document.getElementById("hunger").innerHTML = hunger + '%'
    document.getElementById("health").innerHTML = health + '%'
    document.getElementById("energy").innerHTML = energy + '%'
    document.getElementById("cash").innerHTML = cash
    document.getElementById("difficulty_counter").innerHTML = Math.round(days_multiplier * 100)/100
}

const not_enough_money_text = 'У тебя не хватает денег на это действие'

function eating(cost, feeding) {
    if (cash <cost) {
        alert (not_enough_money_text) }
    else {
    cash = cash - cost
    hunger = hunger + feeding
    next_day() }
}
function sleeping(cost, energy_given) {
    if (cash < cost) {
        alert (not_enough_money_text) }
    else {
    cash = cash - cost
    energy = energy + energy_given
    next_day() }
}
function healing(cost, health_given) {
    if (cash < cost) {
        alert (not_enough_money_text) }
    else {
    cash = cash - cost
    health = health + health_given
    next_day() }
}
function working(difficulty, cash_earned) {
    if (cash < cost) {
        alert (not_enough_money_text) }
    else {
    cash = cash + cash_earned
    difficulty_multiplier = difficulty
    next_day() }
}
