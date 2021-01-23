import * as THREE from 'three';
import * as CANNON from 'cannon';
import { CannonDebugRenderer } from '../physics/CannonDebugRenderer';
import { InputHandler } from '../core/inputHandler/InputHandler';
import { LoadManager } from '../core/LoadManager';
import { Updatable } from '../interfaces/Updatable';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
export declare class Engine {
    fixedTimeStep: number;
    updateTime: number;
    graphics: THREE.Scene;
    physics: CANNON.World;
    updatables: Updatable[];
    inputHandler: InputHandler;
    renderer: THREE.WebGLRenderer;
    cannonDebugRenderer: CannonDebugRenderer;
    camera: THREE.PerspectiveCamera;
    sky: Sky;
    clock: THREE.Clock;
    deltaTime: number;
    loadManager: LoadManager;
    constructor();
    initSky(): void;
    update(): void;
    loadMap(gltf: any): void;
}
