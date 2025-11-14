class Rocks{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("color","#A9A9A9");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("Radius", "1.5")
    scene.append(this.obj);

  }
}