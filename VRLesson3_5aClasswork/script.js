function createMushroom(x, z, isTeleportMushroom = false) {
  const mushroom = new THREE.Group();

  // Stem
  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.3, 1.5, 12),
    new THREE.MeshStandardMaterial({ color: 0xf5deb3 })
  );
  stem.position.y = 0.75;
  mushroom.add(stem);

  // Cap
  const cap = new THREE.Mesh(
    new THREE.SphereGeometry(0.9, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0xcc0000 })
  );
  cap.position.y = 1.5;
  mushroom.add(cap);

  // Spots
  for (let i = 0; i < 6; i++) {
    const spot = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );

    const angle = Math.random() * Math.PI * 2;
    const radius = 0.6;

    spot.position.set(
      Math.cos(angle) * radius,
      1.6 + Math.random() * 0.2,
      Math.sin(angle) * radius
    );

    // ONE spot is secretly the teleport button
    if (isTeleportMushroom && i === 0) {
      spot.userData.isButton = true;
      spot.material.color.set(0x00ffff);
      spot.scale.set(1.4, 1.4, 1.4);

      // Use your existing button system
      createButton(
        x + spot.position.x,
        spot.position.y,
        0x00ffff,
        true
      );
    }

    mushroom.add(spot);
  }

  mushroom.position.set(x, 0, z);
  scene.add(mushroom);
}
