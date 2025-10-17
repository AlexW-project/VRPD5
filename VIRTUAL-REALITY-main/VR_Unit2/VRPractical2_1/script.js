let scene;

function rnd(l, u) {
  return Math.floor(Math.random() * (u - l) + l);
}

window.addEventListener("DOMContentLoaded", function () {
  scene = document.querySelector("a-scene");

  // Generate random trees
  for (let i = 0; i < 100; i++) {
    let x = rnd(-20, 20);
    let z = rnd(-20, 20);
    createTree(x, 0, z);
  }

  // Task 2: Add clouds
  for (let i = 0; i < 10; i++) {
    let x = rnd(-25, 25);
    let y = rnd(5, 15);
    let z = rnd(-25, 25);
    createCloud(x, y, z);
  }

  // Task 4: Add houses
  for (let i = 0; i < 5; i++) {
    let x = rnd(-15, 15);
    let z = rnd(-15, 15);
    createHouse(x, z);
  }
});

// Task 1: Create a cloud
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

// Task 3: Create a house
function createHouse(x, z) {
  let house = document.createElement("a-entity");

  // Base of the house
  let base = document.createElement("a-box");
  base.setAttribute("color", "#b5651d");
  base.setAttribute("width", "3");
  base.setAttribute("height", "2");
  base.setAttribute("depth", "3");
  base.setAttribute("position", "0 1 0");
  house.append(base);

  // Roof
  let roof = document.createElement("a-cone");
  roof.setAttribute("color", "#8b0000");
  roof.setAttribute("radius-bottom", "2.2");
  roof.setAttribute("radius-top", "0.1");
  roof.setAttribute("height", "1.5");
  roof.setAttribute("position", "0 2.75 0");
  house.append(roof);

  // Optional door
  let door = document.createElement("a-box");
  door.setAttribute("color", "#4b2e05");
  door.setAttribute("width", "0.8");
  door.setAttribute("height", "1.2");
  door.setAttribute("depth", "0.1");
  door.setAttribute("position", "0 0.6 1.52");
  house.append(door);

  house.setAttribute("position", { x: x, y: 0, z: z });
  scene.append(house);
}

// Tree function (aligned to ground)
function createTree(x, y, z) {
  let tree = document.createElement("a-entity");

  // Trunk (sits directly on ground)
  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position", "0 0.5 0"); // half height (1) above ground
  stump.setAttribute("color", "brown");
  stump.setAttribute("radius", "0.25");
  stump.setAttribute("height", "1");
  tree.append(stump);

  // Pine leaves (sit on top of trunk)
  let pines = document.createElement("a-cone");
  pines.setAttribute("color", "green");
  pines.setAttribute("height", "2");
  pines.setAttribute("radius-bottom", "1");
  pines.setAttribute("radius-top", "0.1");
  pines.setAttribute("position", "0 1.5 0"); // placed directly above trunk
  tree.append(pines);

  // Tree position
  tree.setAttribute("position", { x: x, y: y, z: z });
  scene.append(tree);
}
