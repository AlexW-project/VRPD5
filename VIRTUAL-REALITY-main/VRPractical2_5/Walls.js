class Cone{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-BOX");
    this.obj.setAttribute("color","#654321");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("height","5");
    scene.append(this.obj);

  }
}