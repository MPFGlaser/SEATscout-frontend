import { Stop } from './stop';

export interface Journey {
    id: number;
    stops: Stop[];
    description_short: string;
    description_long: string;
}
