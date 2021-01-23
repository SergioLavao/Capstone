import * as THREE from 'three';
import * as CANNON from 'cannon';

export class Utils
{
	constructor()
	{

	}

	public Cannon2ThreeVec(Vec3: CANNON.Vec3): THREE.Vector3
	{
		return new THREE.Vector3(Vec3.x, Vec3.y, Vec3.z);
	}

	public Three2CannonVec(Vector3: THREE.Vector3): CANNON.Vec3
	{
		return new CANNON.Vec3(Vector3.x, Vector3.y, Vector3.z);
	}

	public Cannon2ThreeQuat(Quaternion: CANNON.Quaternion): THREE.Quaternion
	{
		return new THREE.Quaternion(Quaternion.x, Quaternion.y, Quaternion.z , Quaternion.w);
	}

	public Three2CannonQuat(Quaternion: THREE.Quaternion): CANNON.Quaternion
	{
		return new CANNON.Quaternion(Quaternion.x, Quaternion.y, Quaternion.z , Quaternion.w);
	}
}