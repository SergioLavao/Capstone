import * as THREE from 'three';
import * as CANNON from 'cannon';
import { Updatable } from '../interfaces/Updatable';
import { Engine } from '../engine/Engine';
import { Utils } from '../core/Utils';
import { Emitter } from "../server/Emitter";
export declare class Character implements Updatable {
    engine: Engine;
    char_emitter: Emitter;
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
    constructor(engine: Engine, emitter: Emitter);
    update(deltaTime: number): void;
    initCharacter(): void;
}
