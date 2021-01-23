import { World } from '../world/World';
import { EntityType } from '../enums/EntityType';
export interface IWorldEntity {
    entityType: EntityType;
    addToWorld(world: World): void;
    removeFromWorld(world: World): void;
}
