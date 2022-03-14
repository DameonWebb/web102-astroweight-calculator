// Write your JavaScript code here!
var select = document.getElementById("planets");
var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];

for(var i = 0; i < planets.length; i++) {
    var opt = planets[i][0];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
function rsg(planetName) {
    for(var i = 0; i < planets.length; i++) {
        if(planetName == planets[i][0]) {
            return planets[i][1];
        } 
        
    } 
}

function calculateWeight(weight, planetName) {
    return weight * rsg(planetName)  
}

function handleClick(e){
    var weight = Number (document.getElementById("user-weight").value);
    var planetSelected = document.getElementById("planets").value;
    var newWeight =  calculateWeight(weight, planetSelected);
    document.getElementById("output").textContent = "If you were on " + planetSelected  + ", you would weigh " + newWeight + "lbs!";

}

planets.forEach(element => console.log(element));

