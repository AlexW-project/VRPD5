class clouds{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
  
        let puff = document.createElement("a-sphere");
        puff.setAttribute("color", "white");
        puff.setAttribute("radius", rnd(1, 3) / 2);
        this.obj.append( puff );
    
        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj )
  }
}