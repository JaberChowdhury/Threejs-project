import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import hexadecimal_color from "./lib/hexadecimal";

window.onload = () => {
  // selecting dom
  const canvas = document.querySelector("#canvas");

  // state
  const limit = 12;
  let meshs1 = [];
  let meshs2 = [];
  let meshs3 = [];
  let meshs4 = [];
  let meshs5 = [];
  let meshs6 = [];
  let meshs7 = [];
  let meshs8 = [];
  let meshs9 = [];
  let meshs10 = [];
  let meshs11 = [];
  let meshs12 = [];
  let meshs13 = [];

  // initializing scene
  const scene = new THREE.Scene();
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

  for (let i = 0; i < limit; i++) {
    const color = hexadecimal_color();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.x = 2 * i + 2;
    meshs1.push(cubeMesh);
  }

  for (let i = 0; i < limit; i++) {
    const color = hexadecimal_color();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.y = 2 * i + 2;
    meshs2.push(cubeMesh);
  }

  for (let i = 0; i < limit; i++) {
    const color = hexadecimal_color();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.z = 2 * i + 2;
    meshs3.push(cubeMesh);
  }

  for (let i = 0; i < limit; i++) {
    const color = hexadecimal_color();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.y = limit * 2 + 2;
    cubeMesh.position.x = 2 * i + 2;
    meshs4.push(cubeMesh);
  }

  for (let i = 0; i < limit; i++) {
    const color = hexadecimal_color();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.z = limit * 2 + 2;
    cubeMesh.position.x = 2 * i + 2;
    meshs5.push(cubeMesh);
  }

  for (let i = 0; i < limit; i++) {
    const color = hexadecimal_color();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.x = limit * 2 + 2;
    cubeMesh.position.z = 2 * i + 2;
    meshs6.push(cubeMesh);
  }

  for (let i = 0; i < limit; i++) {
    const color = hexadecimal_color();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.x = limit * 2 + 2;
    cubeMesh.position.y = 2 * i + 2;
    meshs7.push(cubeMesh);
  }

  for (let i = 0; i < limit; i++) {
    const color = hexadecimal_color();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.y = limit * 2 + 2;
    cubeMesh.position.z = 2 * i + 2;
    meshs8.push(cubeMesh);
  }

  for (let i = 0; i < limit; i++) {
    const color = hexadecimal_color();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.x = limit * 2 + 2;
    cubeMesh.position.y = limit * 2 + 2;
    cubeMesh.position.z = 2 * i + 2;
    meshs9.push(cubeMesh);
  }

  for (let i = 0; i < limit; i++) {
    const color = hexadecimal_color();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.z = limit * 2 + 2;
    cubeMesh.position.x = 2 * i + 2;
    meshs10.push(cubeMesh);
  }

  for (let i = 0; i < limit; i++) {
    const color = hexadecimal_color();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.z = limit * 2 + 2;
    cubeMesh.position.y = 2 * i + 2;
    meshs11.push(cubeMesh);
  }

  for (let i = 0; i < limit; i++) {
    const color = hexadecimal_color();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.y = limit * 2 + 2;
    cubeMesh.position.z = limit * 2 + 2;
    cubeMesh.position.x = 2 * i + 2;
    meshs12.push(cubeMesh);
  }

  for (let i = 0; i < limit; i++) {
    const color = hexadecimal_color();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.x = limit * 2 + 2;
    cubeMesh.position.z = limit * 2 + 2;
    cubeMesh.position.y = 2 * i + 2;
    meshs13.push(cubeMesh);
  }

  // initializing cube_Mesh_Groupe
  const cube_Mesh_Groupe = new THREE.Group();

  for (let i = 0; i < limit; i++) {
    cube_Mesh_Groupe.add(meshs1[i]);
    cube_Mesh_Groupe.add(meshs2[i]);
    cube_Mesh_Groupe.add(meshs3[i]);
    cube_Mesh_Groupe.add(meshs4[i]);
    cube_Mesh_Groupe.add(meshs5[i]);
    cube_Mesh_Groupe.add(meshs6[i]);
    cube_Mesh_Groupe.add(meshs7[i]);
    cube_Mesh_Groupe.add(meshs8[i]);
    cube_Mesh_Groupe.add(meshs9[i]);
    cube_Mesh_Groupe.add(meshs10[i]);
    cube_Mesh_Groupe.add(meshs11[i]);
    cube_Mesh_Groupe.add(meshs12[i]);
    cube_Mesh_Groupe.add(meshs13[i]);
  }

  scene.add(cube_Mesh_Groupe);

  // initializing camera
  const camera = new THREE.PerspectiveCamera(
    limit * 2,
    window.innerWidth / window.innerHeight,
    0.1,
    300,
  );
  camera.position.z = limit * 2;

  scene.add(camera);

  // AxesHelper
  const axesHelper = new THREE.AxesHelper(limit * 2);
  scene.add(axesHelper);

  // initializing the renderer

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const controls = new OrbitControls(camera, canvas);

  controls.autoRotate = true;

  /*
  setInterval(() => {
    for(let i=0; i<cube_Mesh_Groupe.children.length; i++){
     cube_Mesh_Groupe.children[i].scale.y = Math.random() * 20;
    }
  }, 500);
  */

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
