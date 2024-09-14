import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

window.onload = () => {
  // selecting dom
  const canvas = document.querySelector("#canvas");

  // initializing scene
  const scene = new THREE.Scene();

  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const cubeMaterial = new THREE.MeshBasicMaterial({ color: "#00ccff" });
  // const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });
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

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const controls = new OrbitControls(camera, canvas);

  controls.autoRotate = true;

  const animate = () => {
    requestAnimationFrame(animate);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    controls.update();
  };
  animate();

  // render the scene
  renderer.render(scene, camera);

  console.log(THREE);
};
