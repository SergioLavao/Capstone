import '../css/main.css';
import { Engine } from './engine/Engine';
import { Client } from "./server/Client";
import { API } from './API';
import { UI } from './UI';
export declare class Game {
    csrftoken: string;
    engine: Engine;
    ui: UI;
    api: API;
    client: Client;
    keyFunctions: any;
    constructor();
    initGame(): void;
    Login(data: any): void;
    newMessage(): void;
    ketFunc(): void;
}
