
let scene, rocket;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")

  rocket = new Rocket(0, 10, 0);
  rocket.y = 10;
  rocket.dy = 0.01;
  rocket.addEventListener("mouseenter",function(){
    rocket.fly = true;
  })
  rocket.addEventListener("mouseleave",function(){
    rocket.fly = false;
  })

  loop();
})

function loop(){
  if(rocket.fly == true){
    rocket.y += rocket.dy;
    rocket.object3D.position.y = this.y;
  }
  window.requestAnimationFrame("loop");
  
}
