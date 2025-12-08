class Bullet{
  constructor(){
    this.obj = document.createElement("a-entity");
    let body = document.createElement("a-sphere");
    let cone = document.createElement("a-cone");
    body.setAttribute("radius",0.1);
    body.setAttribute("scale", "1 1 2");
    cone.setAttribute("position", "0 0 -0.2");
    cone.setAttribute("rotation", "0 -90 90");
    cone.setAttribute("height", 0.5);
    cone.setAttribute("radius-bottom", 0.05);
    body.setAttribute("color", "yellow");
    cone.setAttribute("color", "yellow");
    let pos = camera.object3D.position;
    this.obj.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
    this.obj.append(cone);
    this.obj.append(body);
    scene.append(this.obj);

    
    let theta = camera.object3D.rotation.y + Math.PI;
    let phi = camera.object3D.rotation.x;
    let v = 0.1
    let v_xz = v * Math.cos(phi);
    this.dz = v_xz * Math.cos(theta);
    this.dx = v_xz * Math.sin(theta);
    this.dy = v * Math.sin(phi);
  }
  fire(){

    this.obj.object3D.position.x += this.dx *6;
    this.obj.object3D.position.y += this.dy *6;
    this.obj.object3D.position.z += this.dz *6; 

    //this.obj.object3D.rotation.y = this.theta - Math.PI/2;
  }
}