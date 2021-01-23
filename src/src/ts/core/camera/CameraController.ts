import * as THREE from 'three';
import * as CANNON from 'cannon';

import { Updatable } from '../../interfaces/Updatable';
import { Engine } from '../../engine/Engine';
import { Utils } from '../Utils';

export class CameraController implements Updatable
{

	public distance: number = 20;
	public dampingFactor: number = 0.5;// max 1;

	public minPolarAngle: number = 0;
	public maxPolarAngle: number = Math.PI;

	public minAzimuthAngle: number = - Infinity;
	public maxAzimuthAngle: number = Infinity;

	public camera: THREE.PerspectiveCamera;
	public target: CANNON.Body;
	public yOffset: number;

	public rotateState: boolean = false;

	//Orbit
	public spherical: THREE.Spherical = new THREE.Spherical();
	public sphericalDelta: THREE.Spherical = new THREE.Spherical();

	public engine: Engine;

	constructor(engine: Engine)
	{
		this.engine = engine;
		this.engine.updatables.push( this );

		this.target = new CANNON.Body();
		this.camera = engine.camera;

		this.lockCursor();
	}

	public update( deltaTime : number ): void
	{

		if (this.engine.inputHandler.inGame) 
		{

			this.rotateCameraAroundTarget();

		}

	}

	public rotateCameraAroundTarget():void
	{
		//inputHandler
		let iH = this.engine.inputHandler;

		//Esphericals
		let sph = this.spherical;
		let sphD = this.sphericalDelta;

		let offset = new THREE.Vector3(0, this.yOffset, 0);

		//Camera position, target position
		let cp = this.camera.position;
		let tp = new Utils().Cannon2ThreeVec( this.target.position );

		//Quaternion Entities
		let quat = new THREE.Quaternion().setFromUnitVectors( this.camera.up, new THREE.Vector3( 0, 1, 0 ) );
		let quatInverse = quat.clone().invert();

		//Maths
		let twoPI = 6.28;

		offset.copy( cp ).sub( tp );

		sphD.theta -=  twoPI * iH.mouseX / window.innerHeight;
		sphD.phi -=  twoPI * iH.mouseY / window.innerHeight;

		offset.applyQuaternion( quat );

		sph.setFromVector3( offset );

		sph.theta += sphD.theta;
		sph.phi += sphD.phi;

		sph.phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, sph.phi ) );

		sph.makeSafe();

		sph.radius = this.distance;

		offset.setFromSpherical( sph );

		offset.applyQuaternion( quatInverse );

		cp.copy( tp ).add( offset );

		sphD.theta *= (1 - this.dampingFactor);
		sphD.phi *= (1 - this.dampingFactor);

		this.camera.lookAt( tp );
	}

	public lockCursor():void
	{

		let cameraController = this;

		var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

		if ( havePointerLock ) {

                var temp = document.body;

    			temp.addEventListener( 'click', function ( event ) {

    				cameraController.rotateState = true;

					temp.requestPointerLock();

                }, false );

		}
	}
}