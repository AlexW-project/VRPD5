window.addEventListener("DOMContentLoaded",function() {
  let myBox = document.querySelector("#myBox");
  //Task 3: Create a variable for the cylinder.  Get the element from the HTML


  myBox.addEventListener("mouseenter",function(){
    this.setAttribute("height",2);
  })
  //Task 4: Add another event to set the height of myBox back to 1 when the mouse is no longer on myBox

  //Task 5: Make  the the cylinder disappear when you click on it.  Set opacity to zero
  function roomThree() {
  scene.background = new THREE.Color(0x050014);
  ambient.color.set(0x00ffff);
  sun.intensity = 1.2;

  // Floor
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
    new THREE.MeshStandardMaterial({
      color: 0x020202,
      metalness: 0.6,
      roughness: 0.3
    })
  );
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  // Control board
  const board = new THREE.Mesh(
    new THREE.BoxGeometry(10, 2, 1),
    new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x002244
    })
  );
  board.position.set(0, 1.5, -5);
  scene.add(board);

  // Buttons
  const buttons = [];
  const buttonCount = 6;
  const correctIndex = Math.floor(Math.random() * buttonCount);

  for (let i = 0; i < buttonCount; i++) {
    const button = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.3, 0.15, 32),
      new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        emissive: 0x008888,
        transparent: true
      })
    );

    button.rotation.x = Math.PI / 2;
    button.position.set(-2.5 + i * 1, 1.5, -4.4);
    button.userData = {
      isCorrect: i === correctIndex,
      active: true
    };

    scene.add(button);
    buttons.push(button);
  }

  // Click logic
  function handleButtonPress(button) {
    if (!button.userData.active) return;

    if (button.userData.isCorrect) {
      goToNextRoom();
    } else {
      button.userData.active = false;
      fadeOut(button);
    }
  }

  // Fade-out animation
  function fadeOut(mesh) {
    const material = mesh.material;
    let opacity = 1;

    function animate() {
      opacity -= 0.05;
      material.opacity = opacity;

      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        scene.remove(mesh);
      }
    }

    animate();
  }

  // Expose buttons for raycasting
  interactiveObjects.push(...buttons);
}

raycaster.setFromCamera(mouse, camera);
const intersects = raycaster.intersectObjects(interactiveObjects);

if (intersects.length > 0) {
  const obj = intersects[0].object;
  if (obj.userData && obj.userData.isCorrect !== undefined) {
    handleButtonPress(obj);
  }
}
})

