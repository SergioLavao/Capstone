import * as THREE from 'three';
import * as CANNON from 'cannon';
import { Updatable } from '../../interfaces/Updatable';
import { Engine } from '../../engine/Engine';
export declare class CameraController implements Updatable {
    distance: number;
    dampingFactor: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    minAzimuthAngle: number;
    maxAzimuthAngle: number;
    camera: THREE.PerspectiveCamera;
    target: CANNON.Body;
    yOffset: number;
    rotateState: boolean;
    spherical: THREE.Spherical;
    sphericalDelta: THREE.Spherical;
    engine: Engine;
    constructor(engine: Engine);
    update(deltaTime: number): void;
    rotateCameraAroundTarget(): void;
    lockCursor(): void;
}
