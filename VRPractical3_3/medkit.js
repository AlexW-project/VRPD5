class Medkit {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.healed = false;

        this.obj = document.createElement("a-entity");
        let box = document.createElement("a-box");
        box.setAttribute("height", 1);
        box.setAttribute("width", 2);
        box.setAttribute("depth", 0.5);
        box.setAttribute("color", "red");
        box.setAttribute("position", "0 0.5 0");
        
        let cross1 = document.createElement("a-box");
        cross1.setAttribute("height", 0.2);
        cross1.setAttribute("width", 0.8);
        cross1.setAttribute("depth", 0.1);
        cross1.setAttribute("color", "white");
        cross1.setAttribute("position", "0 0.5 0.24");
        
        let cross2 = document.createElement("a-box");
        cross2.setAttribute("height", 0.8);
        cross2.setAttribute("width", 0.2);
        cross2.setAttribute("depth", 0.1);
        cross2.setAttribute("color", "white");
        cross2.setAttribute("position", "0 0.5 0.24");

        let handle = document.createElement("a-torus"); 
        handle.setAttribute("radius", 1);
        handle.setAttribute("tube", 0.1);
        handle.setAttribute("rotation", "0 0 0");
        handle.setAttribute("position", "0 0.8 0");
        handle.setAttribute("color", "red");
        handle.setAttribute("arc", 180);
        handle.setAttribute("scale", "0.5 0.5 0.5");

        let label = document.createElement("a-text");
        label.setAttribute("value", "You are aleady at full health!");       
        label.setAttribute("color", "white");        
        label.setAttribute("align", "center");       
        label.setAttribute("position", "0 1.2 1");   
        label.setAttribute("scale", "1 1 1"); 
        label.setAttribute("visible", "false");

        this.obj.append(handle);
        this.obj.append(box);
        this.obj.append(cross1);
        this.obj.append(cross2);
        this.obj.append(label);

        cross1.setAttribute("class", "clickable");
        cross2.setAttribute("class", "clickable");
        box.setAttribute("class", "clickable");

        box.addEventListener("click", () => {
            if (h <= 90) {
                h += 10;
                this.healed = true;
                if (this.healed) {
                    box.setAttribute("visible", "false");
                    cross1.setAttribute("visible", "false");
                    cross2.setAttribute("visible", "false");
                    handle.setAttribute("visible", "false");
                }
            } else {
                label.setAttribute("visible", "true");

                setTimeout(() => {label.setAttribute("visible", "false");}, 3000);
            }
        
        });

        this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
        scene.append(this.obj);
    }
}