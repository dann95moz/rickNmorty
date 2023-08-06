import axios from 'axios';
import { Episode } from '../../interfaces/global/episode.interface';
import { url } from '../apiConfig.service';
import { serializeObjectToQueryString } from '../serialize.service';
import { filterEpisode } from '../../interfaces/filters/filterEpisode.interface';

export const getFilteredEpisodes = (filterEpisode?: filterEpisode) => {
    const queryString = serializeObjectToQueryString(filterEpisode);
    return axios.get<Episode>(`${url}/episode/?${queryString}`);
  };
  