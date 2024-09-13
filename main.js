import "./style.css";

import * as THREE from "three";

window.onload = () => {
  // selecting dom
  const canvas = document.querySelector("#canvas");

  // initializing scene
  const scene = new THREE.Scene();

  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const cubeMaterial = new THREE.MeshBasicMaterial({ color: "#00ccff" });
  const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

  scene.add(cubeMesh);

  // initializing camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    30,
  );
  camera.position.z = 5;

  scene.add(camera);

  // initializing the renderer

  const renderer = new THREE.WebGLRenderer({ canvas });

  renderer.setSize(window.innerWidth, window.innerHeight);
  // render the scene
  renderer.render(scene, camera);

  console.log(THREE);
};
