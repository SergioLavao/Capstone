import * as THREE from 'three';
import * as CANNON from 'cannon';

import { CannonDebugRenderer } from '../physics/CannonDebugRenderer';
import { InputHandler } from '../core/inputHandler/InputHandler';
import { LoadManager } from '../core/LoadManager';
import { Updatable } from '../interfaces/Updatable';
 
import { Sky } from 'three/examples/jsm/objects/Sky.js';

export class Engine
{

	public fixedTimeStep: number = 1 / 30;
	public updateTime: number = 1000 / 30; // ms/FPS;

	public graphics: THREE.Scene;
	public physics: CANNON.World;

	public updatables: Updatable[] = [];

	public inputHandler: InputHandler;

	public renderer: THREE.WebGLRenderer;
	public cannonDebugRenderer: CannonDebugRenderer;

	public camera: THREE.PerspectiveCamera;
	public sky: Sky;

	public clock: THREE.Clock;
	public deltaTime: number;

	public loadManager: LoadManager;

	constructor()
	{
		this.deltaTime = this.fixedTimeStep;
		this.clock = new THREE.Clock();

		this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

		this.renderer = new THREE.WebGLRenderer();
		this.graphics = new THREE.Scene();
		this.physics = new CANNON.World();

		this.physics.gravity.set(0, -9.81, 0)


		//TEMP
		this.sky = new Sky();
		this.sky.scale.setScalar( 450000 );
		this.graphics.add( this.sky );

		let sun = new THREE.Vector3();

		const effectController = {
			turbidity: 10,
			rayleigh: 3,
			mieCoefficient: 0,
			mieDirectionalG: 0.7,
			inclination: 0.5, // elevation / inclination
			azimuth: 0.25, // Facing front,
			exposure: this.renderer.toneMappingExposure
		};

		const uniforms = this.sky.material.uniforms;
		uniforms[ "turbidity" ].value = effectController.turbidity;
		uniforms[ "rayleigh" ].value = effectController.rayleigh;
		uniforms[ "mieCoefficient" ].value = effectController.mieCoefficient;
		uniforms[ "mieDirectionalG" ].value = effectController.mieDirectionalG;

		const theta = Math.PI * ( effectController.inclination - 0.5 );
		const phi = 2 * Math.PI * ( effectController.azimuth - 0.5 );

		sun.x = Math.cos( phi );
		sun.y = Math.sin( phi ) * Math.sin( theta );
		sun.z = Math.sin( phi ) * Math.cos( theta );

		uniforms[ "sunPosition" ].value.copy( sun );

		this.renderer.outputEncoding = THREE.sRGBEncoding;
		this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
		this.renderer.toneMappingExposure = 0.5;
		this.renderer.toneMappingExposure = effectController.exposure;

		this.renderer.render( this.graphics, this.camera );

		this.inputHandler = new InputHandler();
		this.loadManager = new LoadManager();
			
		this.renderer.setSize( window.innerWidth, window.innerHeight );

		this.cannonDebugRenderer = new CannonDebugRenderer( this.graphics, this.physics );
		
		document.body.appendChild( this.renderer.domElement );

		this.update();
	}

	public initSky(): void
	{

	}

	public update(): void
	{

		let e = this;

		setInterval(()=>{

		e.physics.step( e.fixedTimeStep , e.deltaTime );
		
		e.updatables.forEach((u)=>
		{
			u.update( e.deltaTime );
		});

		e.cannonDebugRenderer.update();

		e.renderer.render( e.graphics, e.camera );

		e.deltaTime = e.clock.getDelta();

		}, e.updateTime);		

	}

	public loadMap( gltf ): void
	{

		let e = this;
		let p = e.physics;

	  	gltf.scene.traverse( function ( child ) {

	      if ( child.isMesh ) {

      		let cs = child.scale;
      		let cq = child.quaternion;
      		let cp = child.position;

	        if (child.userData.physics) {

	          	if (child.userData.type === "box") {

	          		let body = new CANNON.Body({
	          			mass: 0,
						position: new CANNON.Vec3( cp.x, cp.y, cp.z ),
	          			shape: new CANNON.Box( new CANNON.Vec3( cs.x, cs.y, cs.z) ),
	          			quaternion: new CANNON.Quaternion( cq.x, cq.y, cq.z, cq.w )
	          		});

	          		p.addBody( body );

	          	}

	        }

          	if (child.userData.spawnable) {

	          	if (child.userData.spawnable === "player") {

	          	}

          	}

	      }
	  } );
	
	}
}