// Our Javascript will go here.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
const loadManager = new THREE.LoadingManager();
const loader = new THREE.TextureLoader(loadManager);

let backgroundImage = loader.load( 'blissdark.jpg' );
scene.background = backgroundImage;


const renderer = new THREE.WebGLRenderer();
document.body.appendChild( renderer.domElement );

let geometry = new THREE.BoxGeometry( 1, 1, 1 );
let material = new THREE.MeshToonMaterial( { color: 0x00ff00 } );
let cube = new THREE.Mesh( geometry, material );
cube.position.x = -1;
cube.position.y = -1;
// enable transparency
material.transparent = true;
scene.add( cube );

geometry = new THREE.BoxGeometry( 2, 2, 2 );
material = new THREE.MeshToonMaterial( { color: 0xff0000 } );
let cube2 = new THREE.Mesh( geometry, material );
cube2.position.x = 3;
cube2.position.y = 0.5;
// enable transparency
material.transparent = true;
scene.add( cube2 );

geometry = new THREE.BoxGeometry( 1, 2, 1 );
material = new THREE.MeshToonMaterial( { color: 0x0000ff } );
let cube3 = new THREE.Mesh( geometry, material );
cube3.position.x = -2;
cube3.position.y = 2;
// enable transparency
material.transparent = true;
scene.add( cube3 );

geometry = new THREE.BoxGeometry( 2, 0.5, 1 );
material = new THREE.MeshToonMaterial( { color: 0xffff00 } );
let cube4 = new THREE.Mesh( geometry, material );
cube4.position.x = -4;
cube4.position.y = -1;
// enable transparency
material.transparent = true;
scene.add( cube4 );

geometry = new THREE.BoxGeometry( 1, 0.5, 1 );
material = new THREE.MeshToonMaterial( { color: 0xff00ff } );
let cube5 = new THREE.Mesh( geometry, material );
cube5.position.x = -5;
cube5.position.y = 3;
// enable transparency
material.transparent = true;
scene.add( cube5 );

geometry = new THREE.BoxGeometry( 16, 9, 0.01 );
material = new THREE.MeshBasicMaterial({
  map: loader.load('bliss.jpg'),
});
screen = new THREE.Mesh( geometry, material );
screen.position.z = -2

geometry = new THREE.BoxGeometry( 17, 10, 0.01 );
material = new THREE.MeshToonMaterial({
  color: 0x111111
});
backscreen = new THREE.Mesh( geometry, material );
backscreen.position.z = -2.1
scene.add( backscreen );

geometry = new THREE.BoxGeometry( 17, 0.1, 15 );
material = new THREE.MeshToonMaterial({
  color: 0x111111
});
keyboard = new THREE.Mesh( geometry, material );
keyboard.position.z = -1 
keyboard.position.y = -5
scene.add( keyboard );

const light = new THREE.HemisphereLight( 0xffffff, 0x080820, 1 );
scene.add( light );

let startTime = performance.now();
function easeInOut(t){
  return t > 0.5 ? 4*Math.pow((t-1),3)+1 : 4*Math.pow(t,3);
}
let tween = (startTime, start, end, duration) => {
  let time = performance.now() - startTime;
  let percent = time / duration;
  percent = percent > 1 ? 1 : percent;
  return start + (end - start) * easeInOut(percent);
}
loadManager.onLoad = ()=> {
  startTime = performance.now();
  scene.add( screen );
  animate();
}

let actualMain = document.querySelector('main');

let mousePos = {x: 0, y: 0};

let scrollPos = 0;

let rotX = 0;
let rotY = 0;

document.addEventListener('mousemove', (e) => {
  mousePos.x = e.clientX / window.innerWidth;
  mousePos.y = e.clientY / window.innerHeight;
});

actualMain.addEventListener('scroll', (e) => {
  scrollPos = e.target.scrollTop;
});

function animate() {
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  requestAnimationFrame( animate );
  cube.rotation.z += 0.01;
  cube.rotation.x += 0.01;
  // set opacity to 50%
  cube.material.opacity = tween(startTime + 250, 0, 1, 500); 

  cube2.rotation.z -= 0.005;
  cube2.rotation.x += 0.015;
  cube2.material.opacity = tween(startTime + 250, 0, 1, 500); 

  cube3.rotation.y += 0.01;
  cube3.rotation.x += 0.01;
  cube3.material.opacity = tween(startTime + 250, 0, 1, 500); 

  cube4.rotation.y += 0.005;
  cube4.rotation.x += 0.01;
  cube4.material.opacity = tween(startTime + 250, 0, 1, 500); 

  cube5.rotation.y += 0.015;
  cube5.rotation.x -= 0.01;
  cube5.material.opacity = tween(startTime + 250, 0, 1, 500); 

  camera.position.z = tween(startTime, 7, 15, 1000);
  camera.position.y = tween(startTime, 0, 6, 1000);
  camera.position.x = tween(startTime, 0, -3, 1000);
  rotX = (rotX * 3 + mousePos.y/64 - scrollPos/4096 + Math.PI/512)/4
  rotY = (rotY * 3 + mousePos.x/64)/4
  camera.rotation.x = tween(startTime, 0, -Math.PI/8 + rotX, 1000);
  camera.rotation.y = tween(startTime, 0, -Math.PI/8 + rotY, 1000);
  renderer.render( scene, camera );

  actualMain.style.setProperty("--animtime",tween(startTime + 550, 0, 1, 500));
}