import { Scene, WebGLRenderer } from 'three';
import Cone from './cone';
import Camera from './camera';

var scene = new Scene();
var cone = Cone(0xffff00);
var camera = Camera();

var renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.add(cone);

const animate = () => {
	requestAnimationFrame( animate );

	cone.rotation.x += 0.02;
	cone.rotation.y += 0.02;
	cone.rotation.z += 0.02;
	camera.position.z += 0.02;

	renderer.render( scene, camera );
}
animate();
