import { World } from '../world/World';
import { IWorldEntity } from '../interfaces/IWorldEntity';
import { EntityType } from '../enums/EntityType';
export declare class Player implements IWorldEntity {
    entityType: EntityType;
    constructor(id: string);
    addToWorld(world: World): void;
    removeFromWorld(world: World): void;
}
