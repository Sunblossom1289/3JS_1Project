import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 2, 4, 2 );
const material = new THREE.MeshBasicMaterial( { color: 0x4682B4 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 7;

function animate() {

	cube.rotation.x += 0.001;
	cube.rotation.y += -0.02;

	renderer.render( scene, camera );

}

