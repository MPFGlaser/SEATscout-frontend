import { Stop } from './stop';

export interface Journey {
    id: number;
    stops: Stop[];
    shortDescription: string;
    longDescription: string;
}
