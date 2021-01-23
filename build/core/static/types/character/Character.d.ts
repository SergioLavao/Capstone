import * as THREE from 'three';
import * as CANNON from 'cannon';
import { Updatable } from '../interfaces/Updatable';
import { Engine } from '../engine/Engine';
import { Utils } from '../core/Utils';
export declare class Character implements Updatable {
    engine: Engine;
    characterPhysics: CANNON.Body;
    mass: number;
    height: number;
    dampingAngleFactor: number;
    forwardStraightCamera: boolean;
    childInfo: any;
    utils: Utils;
    angleY: number;
    isAiming: boolean;
    _m4: THREE.Matrix4;
    constructor(engine: Engine, spawnChild: any);
    update(deltaTime: number): void;
    initCharacter(): void;
}
