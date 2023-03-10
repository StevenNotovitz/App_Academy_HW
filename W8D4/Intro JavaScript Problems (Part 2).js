function titleize(names, callback) {
    const titles = names.map((name) => {
        `Mx. ${name} Jingleheimer Schmidt`
    })
    callback(titles)
}
const printCallback = function(titles) {
    titles.forEach((title) => {
        console.log(title)
    })
}
titleize(["Mary", "Brian", "Leo"], printCallback)

function Elephant(name, height, tricks) {
    this.name = name
    this.height = height
    this.tricks = tricks
}
Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`)
}
Elephant.prototype.grow = function() {
    this.height += 12
}
Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick)
}
Elephant.prototype.play = function() {
    let i = Math.floor(Math.random() * this.tricks.length)
    console.log(`${this.name} is ${this.tricks[i]}!`)
}
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);
let herd = [ellie, charlie, kate, micah]
Elephant.paradeHelper = function(elephant) {
    console.log(`${elephant.name} is trotting by`)
}
herd.forEach(Elephant.paradeHelper)

// function f(order, food) {
//     order = `${order.slice(0, order.length - 8)} and ${food} please.`
//     console.log(order)
// }
function dinerBreakfast() {
    let order = "I'd like cheesy scrambled eggs please."
    console.log(order)
    // return f(order, food)
    return function(food) {
        order = `${order.slice(0, order.length - 8)} and ${food} please.`
        console.log(order)
    }
}
let bfastOrder = dinerBreakfast()
// "I'd like cheesy scrambled eggs please"
console.log(bfastOrder("chocolate chip pancakes"))
// "I'd like cheesy scrambled eggs and chocolate chip pancakes please."
console.log(bfastOrder("grits"))
// "I'd like cheesy scrambled eggs and chocolate chip pancakes and grits please."