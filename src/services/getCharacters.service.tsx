import axios from 'axios'
import { filterCharacter } from '../interfaces/filterCharacters.interface';
import { Characters } from '../interfaces/global/characters.interface';
import { baseUrl } from './mainAPI';
function serializeObjectToQueryString(obj:any) {
  const params = new URLSearchParams();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      params.append(key, obj[key]);
    }
  }
  return params.toString();
}

export const getFilteredCharacters = (filterCharacter?:filterCharacter)=>{
  const queryString = serializeObjectToQueryString(filterCharacter);
    return axios.get<Characters>(`${baseUrl}/character/?${queryString}`);
}




