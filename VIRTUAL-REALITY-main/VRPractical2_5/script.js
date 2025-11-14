/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
  "CCCCC-------------------------CCCCC--C",
  "CCCCC--CCCCC-------CCCCC------CCCCC--C",
  "CC----CC----------------CC----CC----CC",
  "CC----CC---------CC-----CCCCCCC-----CC",
  "CC--CC-------CC----------CC----CCCCC-C",
  "CC--CC---------CCCCC--CCCCC----CCCCC-C",
  "CC---CCCCC-----CC-----CC----------CCCC",
  "CC-CCCCC------CCCCC---------CCCCC---CC",
  "CC---CC---CC--CCCCC-----CCCCCC--------",
  "CC---CC---CC--------------------CC----",
  "CC-CCCCC----------CCCCC-----CCCCC-----",
  "CC-CCCCC--CCCCC--------CCCCC----------",
  "CC----CCCCC---------CCCCC-------CCCCC-",
  "CC-CCCCC------CCCCC------------------C",
  "CC-CCCCC-------------CC-----CCCCC--CCC",
  "CC----CCCCC-------CCCCC------CCCCC--CC",
  "CC---CC--CCCCC------CC---CCCCC-------C",
  "CC-CCCCC-----CCCCC---CCCCC------CCCCCC",
  "CC----CC---------CCCCC-------CCCCCCCCC",
  "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"
];
/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "C"){
        new Cone(c,0.5,r)
      } else if(cols[c] == "R"){
        new Rocks(c,0.5,r)
      }
    }
  }
  })


 