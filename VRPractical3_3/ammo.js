class Ammo{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
        this.obj= document.createElement("entity");
        
        let outer = document.createElement("a-box");
        outer.setAttribute("depth", "1");
        outer.setAttribute("height", "1");
        outer.setAttribute("width", "1");
        outer.setAttribute("position", "");

        this.obj.append(outer);
        scene.append( this.obj );

        this.obj.setAttribute("position", {x:x,y:y,z:z});
        


    }

}