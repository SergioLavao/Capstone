import { World } from '../world/World';
export declare class Client {
    socket: any;
    world: World;
    constructor(world: World);
    private setListener;
}
