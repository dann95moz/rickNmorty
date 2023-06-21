import { Place } from "../place.interface";

export interface CharactersResults {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Place;
    location: Place;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}