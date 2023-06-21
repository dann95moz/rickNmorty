import { Episode } from "../interfaces/global/episode.interface";
import axios from 'axios';
import { baseUrl } from "./mainAPI";

export const getAllEpisodes=()=>{
    return axios.get<Episode>(`${baseUrl}/episode`);
}
export const getEpisode = (id:number) => {
    return axios.get<Episode>(`${baseUrl}/episode${id}`);
  };
  