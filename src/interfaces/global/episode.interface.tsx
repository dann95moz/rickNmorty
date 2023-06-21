
import { EpisodeResults } from "../Results/episodeResults.interface";
import { Info } from "../info.interface";

export interface Episode {
    info:Info,
    results: EpisodeResults[]

}