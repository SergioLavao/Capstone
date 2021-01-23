import * as THREE from 'three';
import * as CANNON from 'cannon';
export declare class Utils {
    constructor();
    Cannon2ThreeVec(Vec3: CANNON.Vec3): THREE.Vector3;
    Three2CannonVec(Vector3: THREE.Vector3): CANNON.Vec3;
    Cannon2ThreeQuat(Quaternion: CANNON.Quaternion): THREE.Quaternion;
    Three2CannonQuat(Quaternion: THREE.Quaternion): CANNON.Quaternion;
}
