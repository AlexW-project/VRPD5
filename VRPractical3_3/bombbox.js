class BombBox{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.explode = false;
        this.obj = document.createElement("a-entity");
        let box = document.createElement("a-box");
        let bottom = document.createElement("a-box");
        let side = document.createElement("a-box"); 
        let side2 = document.createElement("a-box");
        let side3 = document.createElement("a-box");
        let side4 = document.createElement("a-box");
        let bullet = document.createElement("a-cylinder");
        let bullet2 = document.createElement("a-cylinder");
        let bullet3 = document.createElement("a-cylinder");
        let bulletTop = document.createElement("a-cone");
        let bulletTop2 = document.createElement("a-cone");
        let bulletTop3 = document.createElement("a-cone");

        bottom.setAttribute("depth", "0.1");
        bottom.setAttribute("color", "green");
        bottom.setAttribute("height", "1");
        bottom.setAttribute("width", "1");
        bottom.setAttribute("rotation", "90 0 0");
        bottom.setAttribute("position", "0 -0.5 0.5")

        box.setAttribute("color","green");
        box.setAttribute("depth","0.1");
        box.setAttribute("height","0.5");
        box.setAttribute("width","1");
        box.setAttribute("position", "0 -0.5 0");

        side.setAttribute("color", "green");
        side.setAttribute("depth", "0.1");
        side.setAttribute("height", "0.5");
        side.setAttribute("width", "1");
        side.setAttribute("rotation", "0 90 0");
        side.setAttribute("position", "-0.5 -0.5 0.5");

        side2.setAttribute("color", "green");
        side2.setAttribute("depth", "0.1");
        side2.setAttribute("height", "0.5");
        side2.setAttribute("width", "1");
        side2.setAttribute("rotation", "0 90 0");
        side2.setAttribute("position", "0.5 -0.5 0.5");

        side3.setAttribute("color", "green");
        side3.setAttribute("depth", "0.1");
        side3.setAttribute("height", "1");
        side3.setAttribute("width", "1");
        side3.setAttribute("rotation", "-45 0 0");
        side3.setAttribute("position", "0 -0.1 -0.2");

        side4.setAttribute("color", "green");
        side4.setAttribute("depth", "0.1");
        side4.setAttribute("height", "1");
        side4.setAttribute("width", "1");
        side4.setAttribute("rotation", "0 0 0");
        side4.setAttribute("position", "0 -0.75 1");

        bullet.setAttribute("color", "yellow");
        bullet.setAttribute("height", "0.5");
        bullet.setAttribute("radius", "0.1");
        bullet.setAttribute("rotation", "90 0 0");
        bullet.setAttribute("position", "0.25 -0.5 0.5");

        bullet2.setAttribute("color", "yellow");
        bullet2.setAttribute("height", "0.5");
        bullet2.setAttribute("radius", "0.1");
        bullet2.setAttribute("rotation", "90 0 0");
        bullet2.setAttribute("position", "0 -0.5 0.5");

        bullet3.setAttribute("color", "yellow");
        bullet3.setAttribute("height", "0.5");
        bullet3.setAttribute("radius", "0.1");
        bullet3.setAttribute("rotation", "90 0 0");
        bullet3.setAttribute("position", "-0.25 -0.5 0.5");

        bulletTop.setAttribute("color", "yellow");
        bulletTop.setAttribute("height", "0.2");
        bulletTop.setAttribute("radius-bottom", "0.1");
        bulletTop.setAttribute("rotation", "90 0 0");
        bulletTop.setAttribute("position", "0 -0.5 0.85");

        bulletTop2.setAttribute("color", "yellow");
        bulletTop2.setAttribute("height", "0.2");
        bulletTop2.setAttribute("radius-bottom", "0.1");
        bulletTop2.setAttribute("rotation", "90 0 0");
        bulletTop2.setAttribute("position", "-0.25 -0.5 0.85");

        bulletTop3.setAttribute("color", "yellow");
        bulletTop3.setAttribute("height", "0.2");
        bulletTop3.setAttribute("radius-bottom", "0.1");
        bulletTop3.setAttribute("rotation", "90 0 0");
        bulletTop3.setAttribute("position", "0.25 -0.5 0.85");

        this.obj.setAttribute("position",{x:this.x, y:0.5, z:this.z});
        this.obj.setAttribute("visible", true);
        
        bottom.addEventListener("click", ()=>{
            h -= 20;
            this.explode = true;
            bottom.setAttribute("visible", false);
            box.setAttribute("visible", false);
            side.setAttribute("visible", false);
            side2.setAttribute("visible", false);
            side3.setAttribute("visible", false);
            side4.setAttribute("visible", false);
            bullet.setAttribute("visible", false);
            bullet2.setAttribute("visible", false);
            bullet3.setAttribute("visible", false);
            bulletTop.setAttribute("visible", false);
            bulletTop2.setAttribute("visible", false);
            bulletTop3.setAttribute("visible", false);
            bottom.removeAttribute("class");
        });

        side3.addEventListener("click", ()=>{
            ammo_count += 3;
            bottom.setAttribute("visible", false);
            box.setAttribute("visible", false);
            side.setAttribute("visible", false);
            side2.setAttribute("visible", false);
            side3.setAttribute("visible", false);
            side4.setAttribute("visible", false);
            bullet.setAttribute("visible", false);
            bullet2.setAttribute("visible", false);
            bullet3.setAttribute("visible", false);
            bulletTop.setAttribute("visible", false);
            bulletTop2.setAttribute("visible", false);
            bulletTop3.setAttribute("visible", false);
            bottom.removeAttribute("class");
        });
        
        this.obj.append(box);
        this.obj.append(bottom);
        this.obj.append(side);
        this.obj.append(side2);
        this.obj.append(side3);
        this.obj.append(side4);
        this.obj.append(bullet);
        this.obj.append(bullet2);
        this.obj.append(bullet3);
        this.obj.append(bulletTop);
        this.obj.append(bulletTop2);
        this.obj.append(bulletTop3);
        bottom.setAttribute("class", "clickable");
        side3.setAttribute("class", "clickable");

        scene.append(this.obj);

}}