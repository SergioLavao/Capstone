export declare class Emitter {
    socket: any;
    constructor(socket: any);
    newMessage(msg: string): void;
    updateClient(charData: any): void;
}
