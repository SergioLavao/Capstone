import * as THREE from 'three';
import * as CANNON from 'cannon';
import * as $ from 'jquery';

import { Updatable } from '../interfaces/Updatable';
import { Engine } from '../engine/Engine';
import { Utils } from '../core/Utils';

export class Character implements Updatable
{

	public engine: Engine;

	//PhysicsProps
	public characterPhysics: CANNON.Body;
	public mass: number = 1;//kg
	public height: number = 1; //Meters
	public dampingAngleFactor: number = 0.5;

	public forwardStraightCamera : boolean = true;

	public childInfo: any;

	public utils: Utils = new Utils();


	public angleY: number = 0;

	public isAiming: boolean = true;

	public _m4 = new THREE.Matrix4();

	constructor(engine: Engine, spawnChild: any)
	{
		
		this.engine = engine;	
		this.childInfo = spawnChild;
		this.initCharacter();

		this.engine.updatables.push( this );

	}

	public update( deltaTime: number )
	{

	}

	public initCharacter()
	{

		let c = this;
		let e = c.engine;
		let cp = c.childInfo.position;
		let cq = c.childInfo.quaternion;

		let char = c.characterPhysics;

		this.characterPhysics = new CANNON.Body
		({ 
			mass : c.mass, //c.mass,
			position: new CANNON.Vec3( cp.x, cp.y, cp.z ),
  			quaternion: new CANNON.Quaternion( cq.x, cq.y, cq.z, cq.w )
		}); 


        var sphereShape = new CANNON.Sphere( c.height  );

        for (let i = 0 ; i < 3; i++) {

			this.characterPhysics.addShape(sphereShape, new CANNON.Vec3( 0, i , 0));
        
        }

		this.characterPhysics.fixedRotation = true;

		e.physics.addBody( this.characterPhysics );

	}

} 