import { Engine } from '../engine/Engine';

export interface Updatable
{
	update( deltaTime: number ): void;
}