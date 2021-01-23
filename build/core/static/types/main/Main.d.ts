import * as THREE from 'three';
import * as CANNON from 'cannon';
import { CannonDebugRenderer } from '../physics/CannonDebugRenderer';
import { CameraController } from '../core/camera/CameraController';
import { InputHandler } from '../core/inputHandler/InputHandler';
import { LoadManager } from '../core/LoadManager';
import { Updatable } from '../interfaces/Updatable';
import { Character } from '../character/Character';
export declare class Engine {
    fixedTimeStep: number;
    updateTime: number;
    graphics: THREE.Scene;
    physics: CANNON.World;
    character: Character;
    updatables: Updatable[];
    inputHandler: InputHandler;
    renderer: THREE.WebGLRenderer;
    cannonDebugRenderer: CannonDebugRenderer;
    camera: THREE.PerspectiveCamera;
    cameraController: CameraController;
    clock: THREE.Clock;
    deltaTime: number;
    loadManager: LoadManager;
    constructor(pathMap: string);
    update(): void;
    loadMap(gltf: any): void;
}
