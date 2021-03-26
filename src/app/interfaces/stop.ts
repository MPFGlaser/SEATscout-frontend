import { Location } from './location';

export interface Stop {
    location: Location;
    arrival: Date;
    departure: Date;
}
