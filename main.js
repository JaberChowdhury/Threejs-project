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
  const cubeMesh1 = new THREE.Mesh(cubeGeometry, cubeMaterial);
  const cubeMesh2 = new THREE.Mesh(cubeGeometry, cubeMaterial);
  const cubeMesh3 = new THREE.Mesh(cubeGeometry, cubeMaterial);
  const cubeMesh4 = new THREE.Mesh(cubeGeometry, cubeMaterial);

  cubeMesh1.position.x = 2;
  cubeMesh2.position.x = 4;
  cubeMesh3.position.x = 6;
  cubeMesh4.position.x = 8;

  const cube_Mesh_Groupe = new THREE.Group();

  cube_Mesh_Groupe.add(cubeMesh1);
  cube_Mesh_Groupe.add(cubeMesh2);
  cube_Mesh_Groupe.add(cubeMesh3);
  cube_Mesh_Groupe.add(cubeMesh4);

  scene.add(cube_Mesh_Groupe);

  // initializing camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    300,
  );
  camera.position.z = 5;

  scene.add(camera);

  // AxesHelper
  const axesHelper = new THREE.AxesHelper(10);
  scene.add(axesHelper);

  // initializing the renderer

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const controls = new OrbitControls(camera, canvas);

  controls.autoRotate = true;

  setInterval(() => {
    cube_Mesh_Groupe.children[0].scale.y = Math.random() * 20;
    cube_Mesh_Groupe.children[1].scale.y = Math.random() * 20;
    cube_Mesh_Groupe.children[2].scale.y = Math.random() * 20;
    cube_Mesh_Groupe.children[3].scale.y = Math.random() * 20;
  }, 500);

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
