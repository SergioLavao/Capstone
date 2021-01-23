import { Game } from './game';
export declare class UI {
    game: Game;
    constructor(game: Game);
    initScreen(): void;
    appedTopInfo(msg: string, msTime?: number): void;
    gameUI(): void;
}
