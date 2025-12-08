class Tree{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let pines = document.createElement("a-cone");
    pines.setAttribute("color","white");
    pines.setAttribute("position","0 4 0");
    pines.setAttribute("height","2");
    pines.setAttribute("radius-bottom","1");
    pines.setAttribute("segments-radial","6");
    pines.setAttribute("scale" ,"1.5 2 1.5");
    this.obj.append( pines );
  
    let stump = document.createElement("a-cylinder");
    stump.setAttribute("position","0 0 0");
    stump.setAttribute("color","brown");
    stump.setAttribute("radius","0.45");
    stump.setAttribute("height","5");
    stump.setAttribute("position","0 0 0");
    this.obj.append( stump );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )

    pines.setAttribute("class", "clickable");
    stump.setAttribute("class", "clickable");

 

  }
}