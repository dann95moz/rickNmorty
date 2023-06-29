import axios from 'axios';
import { serializeObjectToQueryString } from '../serialize.service';
import { filterLocation } from '../../interfaces/filterLocation';
import { url } from '../apiConfig.service';
import { Episode } from '../../interfaces/global/episode.interface';


export const getFilteredLocations = (filterEpisode?: filterLocation) => {
  const queryString = serializeObjectToQueryString(filterEpisode);
  return axios.get<Episode>(`${url}/location/?${queryString}`);
};