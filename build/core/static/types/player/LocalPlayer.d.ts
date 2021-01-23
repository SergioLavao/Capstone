import { Player } from './Player';
import { IWorldEntity } from '../interfaces/IWorldEntity';
import { EntityType } from '../enums/EntityType';
export declare class LocalPlayer extends Player implements IWorldEntity {
    entityType: EntityType;
    constructor();
}
