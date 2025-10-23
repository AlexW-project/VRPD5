let scene;
let car;
let pokeball;
let rocket;
let dude;
let sun;

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene"); //CSS Selector
    car = document.querySelector("#car");
    car.a = 0;
    car.da = -.03;
    car_loop();
    
})
function car_loop(){
    car.a += car.da;
    car.setAttribute("position", {x:car.a, y:0, z:0});
    window.requestAnimationFrame(car_loop);
}

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene"); //CSS Selector
    pokeball = document.querySelector("#pokemonball");
    pokeball.a = 0;
    pokeball.da = 1;
    pokeball_loop();
    
})
function pokeball_loop(){
    pokeball.a += pokeball.da;
    pokeball.setAttribute("rotation", {x:pokeball.a, y:0, z:0});
    window.requestAnimationFrame(pokeball_loop);
}

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene"); //CSS Selector
    rocket = document.querySelector("#rocket");
    rocket.a = 0;
    rocket.da = 0.1;
    rocket_loop();
    
})
function rocket_loop(){
    rocket.a += rocket.da;
    rocket.setAttribute("position", {x:0, y:rocket.a, z:0});
    window.requestAnimationFrame(rocket_loop);
}