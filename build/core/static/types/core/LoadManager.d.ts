import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
export declare class LoadManager {
    gltfLoader: GLTFLoader;
    constructor();
    LoadGLTF(path: string, onLoadComplete: (gltf: any) => void): void;
}
