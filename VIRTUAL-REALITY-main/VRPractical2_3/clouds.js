function createCloud(x, y, z) {
  let cloud = document.createElement("a-entity");

  for (let i = 0; i < 3; i++) {
    let puff = document.createElement("a-sphere");
    puff.setAttribute("color", "white");
    puff.setAttribute("radius", rnd(1, 3) / 2);
    puff.setAttribute("position", {
      x: i - 1 + Math.random() * 0.5,
      y: Math.random() * 0.3,
      z: Math.random() * 0.5,
    });
    cloud.append(puff);
  }

  cloud.setAttribute("position", { x: x, y: y, z: z });
  scene.append(cloud);
}