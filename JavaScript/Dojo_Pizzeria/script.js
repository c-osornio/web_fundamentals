function pizzaOven(crustType, sauseType, cheeses, toppings) {
    var pizza = [];
    pizza.crust = crustType;
    pizza.sause = sauseType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

console.log(pizzaOven())  // returns a pizza object

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(p1) // pizza with "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(p2) // pizza with "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

var p3 = pizzaOven("thin crust", "marinara", ["mozzarella"], ["pepperoni", "olives", "jalepenos"])
console.log(p3)
var p4 = pizzaOven("cheese crust", "buffalo", ["mozzarella"], ["chicken", "yellow peppers", "onions"])
console.log(p4) // Create 2 more pizzas with any toppings we like

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin crust",
    "cauliflower",
    "gluten free",
    "cheese crust"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "buffalo"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "chicken",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "jalepenos"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var randomPizza = {};
    randomPizza.crustType = randomPick(crustTypes);
    randomPizza.sauceType = randomPick(sauceTypes);
    randomPizza.cheeses = randomPick(cheeses);
    randomPizza.toppings = [];
    for (var i = 0; i < randomRange(4, 0); i++) {
        randomPizza.toppings.push(randomPick(toppings));
    }
    return randomPizza;
}

console.log(randomPizza());
