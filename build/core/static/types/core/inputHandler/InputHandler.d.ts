export declare class InputHandler {
    inGame: boolean;
    mouseX: number;
    mouseY: number;
    keyEvents: any;
    keyFunctions: any;
    constructor();
    regKeyFunc(keyCode: string, handlerFunction: any): void;
}
