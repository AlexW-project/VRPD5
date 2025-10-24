class House{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
  
        let walls = document.createElement("a-box");
        walls.setAttribute("color","orange");
        walls.setAttribute("height","2");
        this.obj.append( walls );
  
        let roof = document.createElement("a-cone");
        roof.setAttribute("position","0 1.5 0");
        roof.setAttribute("color","brown");
        roof.setAttribute("radius","0.25");
        this.obj.append( roof );
  
        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj )

    }
}

