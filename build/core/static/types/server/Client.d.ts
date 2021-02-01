import { Emitter } from "./Emitter";
export declare class Client {
    socket: any;
    emitter: Emitter;
    char_data: any;
    constructor(onConnectFunc?: (emitter: any) => void);
}
