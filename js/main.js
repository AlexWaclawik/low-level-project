let scene, camera, renderer, sphere;

function init(){
  scene = new THREE.Scene();
  // camera takes FOV, aspect ratio, near cull, far cull)
  camera = new THREE.PerspectiveCamera(45, window.innerWidth/ window.innerHeight, .01, 1000);

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);

  // add results of renderer as an HTML DOM object
  document.body.appendChild(renderer.domElement);

  // create or load in geometries - geometry is a meshInstance or mesh in other languages
  var geometry = new THREE.SphereGeometry(-1, 64, 32);

  // load an image texture
  var texture = new THREE.TextureLoader().load('texture.jpg');  

  var matTexture = new THREE.MeshBasicMaterial( {map: texture} );
  var matTextureColor = new THREE.MeshBasicMaterial( {map: texture, color: 0x00CC00} );
  
  // what THREE calls a mesh we would normally call an object
  sphere = new THREE.Mesh ( geometry, matTexture );

  // add object to screen
  scene.add( sphere );

  // for any but basic material, lights are necessary
  scene.add(new THREE.DirectionalLight( 0xffffff, 0.125));
  scene.add(new THREE.AmbientLight( 0x666666));

  // move camera away from object or you'll see a black screen
  camera.position.z = 4;

} // end init

function update(){
  // call at up to 60 fps
  requestAnimationFrame(update);

  // input or animation code can go here
  sphere.rotation.x += .005;
  sphere.rotation.y += .005;
  
  // render the current scene
  renderer.render(scene, camera);
} // end update

init();
update();