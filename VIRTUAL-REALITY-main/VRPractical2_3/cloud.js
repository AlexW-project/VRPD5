class Cloud{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
  
        let puffs = document.createElement("a-sphere");
        puffs.setAttribute("color","white");
        puffs.setAttribute("radius","2");
        this.obj.append( puffs )
  
        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj )
  }
}