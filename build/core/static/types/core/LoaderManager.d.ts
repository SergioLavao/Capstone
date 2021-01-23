import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export declare class LoaderManager {
    gltfLoader: GLTFLoader;
    constructor();
    loadGLTF(path: string, onLoadingFinished: (gltf: any) => void): void;
}
