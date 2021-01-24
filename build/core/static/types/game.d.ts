import '../css/main.css';
import { Engine } from './engine/Engine';
import { API } from './API';
import { UI } from './UI';
export declare class Game {
    csrftoken: string;
    engine: Engine;
    ui: UI;
    api: API;
    constructor();
    initGame(): void;
    Login(data: any): void;
    initKeysHandler(): void;
}
