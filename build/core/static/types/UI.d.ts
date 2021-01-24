import { Game } from './game';
export declare class UI {
    game: Game;
    constructor(game: Game);
    initScreen(): void;
    gameUI(): void;
    chat(): void;
    openChatInput(): void;
    closeChatInput(): void;
    appendToChat(msg: string): void;
    appedTopInfo(msg: string, msTime?: number): void;
}
