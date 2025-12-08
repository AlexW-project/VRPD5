let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, enemies = [], ammo_boxes = [], ammo_count = 3, enemy_killed = 0, h = 100, t = 125, trees=[], otherTrees=[], bombs=[], medkits=[];

  let ammoMap = [ "-------------------------------------------------a---------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "----------------------------------------------------------------------------------------------------------------a",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "a----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "--------------------------------------------------------------------------a--------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-a---------------------------------------------------------------------------------------------------------------",
                  "--------------------------------------------------------------------------------------------------------a--------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "-----------------------------------------------------------------------------------------------------------------",
                  "---------------------a-------------------------------------------------------------------------------------------",
  ];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  ammoTxt = document.querySelector("#ammo_count");
  healthTxt = document.querySelector("#health");
  enemyTxt = document.querySelector("#enemies_killed");
  gameTxt = document.querySelector("#gameover");
  timerTxt = document.querySelector("#timer");
  winTxt = document.querySelector("#youwin");
  gameOverImg = document.querySelector("#gameover_img");
  winnerImg = document.querySelector("#youwin_img");
  fullHealthImg = document.querySelector("#full_health");
  halfHealthImg = document.querySelector("#half_health");
  noHealthImg = document.querySelector("#no_health");
  bombImg = document.querySelector("#boomPicture");
  ouchImg = document.querySelector("#hit");
  healImg = document.querySelector("#healing");

  for(let r = 0; r < ammoMap.length; r++){
  let row = ammoMap[r];
  let ch = row.split("");
  for(let c = 0; c < ch.length; c++){
    if(ch[c] == "a"){
      let x = c - ammoMap.length / 3;
      let z = r - ammoMap.length / 3;
      let ammoBox = new AmmoBox(x,2,z);
      ammo_boxes.push(ammoBox);
    }
  }
}

  window.addEventListener("keydown",function(e){
    //User can only fire with they press the spacebar and have sufficient ammo
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
    }
  })

  for(let i = 0; i<10; i++){
    let x = rnd(-50,50);
    let y = 1; 
    let z = rnd(-50,50);
    let enemy = new Snowman(x,y,z);
    enemies.push(enemy);
  }

  for(let i = 0; i<85; i++){
    let x = rnd(-75,100);
    let y = 1; 
    let z = rnd(-75,100);
    let tree = new Tree(x,y,z);
    trees.push(tree);
  }

  for(let i = 0; i<45; i++){
    let x = rnd(-75,100);
    let y = 7; 
    let z = rnd(-75,100);
    let ot = new otherTree(x,y,z);
    otherTrees.push(ot);
  }

  for(let i = 0; i<15; i++){
    let x = rnd(-55,100);
    let y = 1; 
    let z = rnd(-55,100);
    let bomb = new BombBox(x,y,z);
    bombs.push(bomb);
  }

  for(let i = 0; i<6; i++){
    let x = rnd(-75,100);
    let y = 0.1; 
    let z = rnd(-75,100);
    let medkit = new Medkit(x,y,z);
    medkits.push(medkit);
  }

  
  setTimeout(loop,100);
  setTimeout(countdown,100);
})

function loop(){
  healthTxt.setAttribute("value", `Health: ${h}`)
  ammoTxt.setAttribute("value", `Ammo: ${ammo_count}`)
  enemyTxt.setAttribute("value", `Score: ${enemy_killed}`)
  for (let enemy of enemies){
    enemy.walk();
    if (bullet && distance(bullet.obj, enemy.obj) < 1.5 && !enemy.die){
      enemy.die = true;
      enemy_killed++;
    }
    if (distance(camera, enemy.obj) < 2){ 
      if (!enemy.checkHit){
        h -= 10;
        enemy.checkHit = true;
        ouchImg.setAttribute("visible", true);
        setTimeout(() => {
          ouchImg.setAttribute("visible", false); }, 1000);
          if (h <= 0 && t > 0){
            gameOverImg.setAttribute("visible", true);
  } 
  }
} else {
   enemy.checkHit = false;
}
}
for (let bomb of bombs){
  if (bomb.explode){
    bombImg.setAttribute("visible", true);
    setTimeout(() => {
      bombImg.setAttribute("visible", false);
      bomb.explode = false; }, 1000);
  }
}

  for (let medkit of medkits){
    if (medkit.healed){
      let healImg = document.querySelector("#healing");
      healImg.setAttribute("visible", true);
      setTimeout(() => {
        healImg.setAttribute("visible", false);
        medkit.healed = false; }, 1000);
    }
  }


  if (enemy_killed >= 10 && t > 0 && h > 0){
    winnerImg.setAttribute("visible", true);
  }

  if(bullet){
    bullet.fire();
  }
  if (t > 0 && h > 50){
    fullHealthImg.setAttribute("visible", true);
    halfHealthImg.setAttribute("visible", false);
    noHealthImg.setAttribute("visible", false);
  }
  if(t>0 && h<= 50){
    fullHealthImg.setAttribute("visible", false);
    halfHealthImg.setAttribute("visible", true);
  }
  if(t > 0 && h <= 10){
    halfHealthImg.setAttribute("visible", false);
    noHealthImg.setAttribute("visible", true);
  }
  if (t <= 0 || h <= 0){
    gameOverImg.setAttribute("visible", true);
  }
  if (winnerImg.getAttribute("visible") == true && enemy_killed >= 10){
    return;
  }

 
  window.requestAnimationFrame(loop);
}

function countdown(){
  t--;
  timerTxt.setAttribute("value", `Time: ${t}`);
  if (t <= 0 && enemy_killed < 10){
    gameTxt.setAttribute("visible", true);
    t = 0;
  }

  setTimeout(countdown,1000);
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}