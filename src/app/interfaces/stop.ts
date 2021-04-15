import { Journey } from './journey';
import { Location } from './location';

export interface Stop {
    id: number;
    location: Location;
    journey: Journey;
    arrival: Date;
    departure: Date;
}
