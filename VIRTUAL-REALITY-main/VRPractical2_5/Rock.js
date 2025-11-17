class Block{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("src", "bush.jpg");
    this.obj.setAttribute("height","2");
    scene.append(this.obj);

    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("src", "bush.jpg");
    this.obj.setAttribute("scale","1 2 1");
    this.obj.setAttribute("radius","0.7");
    scene.append(this.obj);
  }
}