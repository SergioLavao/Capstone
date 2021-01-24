import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class LoadManager
{

	public gltfLoader: GLTFLoader;

	constructor()
	{
		this.gltfLoader = new GLTFLoader();
	}

	public LoadGLTF(path : string, onLoadComplete: (gltf : any) => void ): void
	{

		this.gltfLoader.load(
		path,
		function ( gltf ) {

			onLoadComplete( gltf );

		},
		function ( xhr ) {

		},
		function ( error ) {

			console.log( error );

		});
	}
	
}