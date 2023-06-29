import axios from 'axios'
import { filterCharacter } from '../../interfaces/filters/filterCharacters.interface';
import { Characters } from '../../interfaces/global/characters.interface';
import { serializeObjectToQueryString } from '../serialize.service';
import { url } from '../apiConfig.service';

export const getFilteredCharacters = (filterCharacter?:filterCharacter)=>{
  const queryString = serializeObjectToQueryString(filterCharacter);
    return axios.get<Characters>(`${url}/character/?${queryString}`);
}


