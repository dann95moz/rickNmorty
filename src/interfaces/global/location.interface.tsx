import { Info } from "../info.interface";
import { LocationResults } from "../Results/locationResults.interface";

export interface Location {
    info: Info;
    results: LocationResults[];
}