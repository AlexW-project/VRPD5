let maze = [
"---xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
"---x-----------x--x--x--x-----------------x--------x--------x",
"x--x--xxxxxxxxxx--x--x--xxxxxxxxxx--x--xxxx--x--xxxxxxxxxx--x",
"x--------x--x--x-----x--------x-----x--x-----x-----x-----x--x",
"xxxxxxx--x--x--x--x--x--xxxxxxxxxx--xxxx--xxxxxxxxxxxxx--x--x",
"x-----x-----------x--x-----------x-----x--x-----------------x",
"xxxx--xxxx--x--xxxxxxx--x--xxxxxxx--xxxx--x--x--x--xxxx--x--x",
"x--------x--x-----------x--x-----x--x--------x--x-----x--x--x",
"x--xxxxxxxxxxxxx--xxxxxxx--x--x--x--x--xxxx--xxxxxxx--xxxxxxx",
"x--x-----x--x--x--x--x--x-----x-----x--x--x--x-----------x--x",
"x--x--xxxx--x--x--x--x--xxxx--xxxxxxx--x--x--xxxxxxx--xxxx--x",
"x-----------x--------x-----x--x--------x-----x--x--x--------x",
"x--xxxxxxxxxxxxx--xxxx--xxxx--x--xxxx--xxxxxxx--x--xxxx--x--x",
"x-----------x--x-----x--x-----x--x-----x-----x-----------x--x",
"xxxx--xxxx--x--x--x--x--x--xxxxxxxxxxxxx--x--x--x--xxxxxxxxxx",
"x--x--x--x-----x--x--x--------x--x--------x-----x--------x--x",
"x--xxxx--xxxx--xxxx--x--x--x--x--x--xxxx--xxxxxxx--x--xxxx--x",
"x-----------x--x-----x--x--x--x-----x-----x--------x--------x",
"xxxx--xxxx--x--x--x--xxxxxxx--x--xxxxxxxxxxxxx--xxxx--xxxx--x",
"x--------x--------x--x--x--x-----x-----------x--x--x-----x--x",
"xxxxxxxxxxxxxxxxxxx--x--x--xxxx--xxxx--xxxxxxxxxx--xxxx--x--x",
"x--------------x--x--------x-----x-----x--x--x--------x--x--x",
"x--xxxx--xxxxxxx--xxxx--xxxx--x--x--xxxx--x--xxxx--x--x--x--x",
"x--x-----x-----x--------x-----x--x-----x--x--------x-----x--x",
"xxxx--x--xxxx--xxxx--x--x--xxxxxxxxxx--x--xxxxxxxxxx--xxxxxxx",
"x-----x--x-----x--x--x--x--------x--------x-----------------x",
"x--xxxx--xxxx--x--xxxxxxx--x--xxxx--x--xxxxxxx--xxxx--xxxxxxx",
"x-----x--------------x-----x--x-----x--x--------x--x--------x",
"x--x--x--xxxxxxxxxx--x--x--x--xxxxxxx--xxxxxxxxxx--xxxx--xxxx",
"x--x--x-----x--x--x--x--x--x-----x-----x-----------x-----x--x",
"x--xxxx--x--x--x--xxxxxxxxxxxxxxxx--x--x--xxxxxxx--x--xxxx--x",
"x--x-----x-----x--x--------------x--x-----x--x-----x--x-----x",
"xxxx--xxxxxxx--x--xxxx--xxxx--x--x--xxxxxxx--xxxx--x--x--x--x",
"x-----x--------------x--x-----x--------------x--x--x-----x--x",
"x--xxxxxxx--xxxxxxxxxx--xxxx--xxxx--xxxx--xxxx--x--x--x--xxxx",
"x--x-----------x--x--------x--x--------x--x-----x-----x--x--x",
"xxxxxxxxxx--xxxx--xxxx--xxxxxxxxxxxxxxxx--x--xxxx--x--xxxx--x",
"x--------x--------------x--x-----------x--x-----x--x--------x",
"x--xxxxxxxxxxxxxxxx--x--x--xxxx--x--x--x--x--x--x--xxxxxxxxxx",
"x--------------------x--------x--x--x--------x--x-----------",
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
    }
    
  }

})