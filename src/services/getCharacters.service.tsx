import axios from 'axios'
import { filterCharacter } from '../interfaces/filterCharacters.interface';
import { Characters } from '../interfaces/global/characters.interface';
import { baseUrl } from './mainAPI';
import { CharactersResults } from '../interfaces/Results/charactersResults.interface';

function serializeObjectToQueryString(obj:any) {
  const params = new URLSearchParams();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      params.append(key, obj[key]);
    }
  }
  return params.toString();
}
export const getCharacterById = (id: number) => {
    return axios.get<CharactersResults>(`${baseUrl}/character/${id}`);
  };
  
  export const getCharactersByIds = (ids: number[]) => {
    let multipleCharsUrl = '';
    for (let i = 0; i < ids.length; i++) {
      multipleCharsUrl += `${ids[i] < ids.length ? `${ids[i]},` : ids[i]}`;
    }
    return axios.get<CharactersResults[]>(`${baseUrl}/character${multipleCharsUrl}`);
  };
  
  export const getAllCharacters = () => {
    return axios.get<Characters>(`${baseUrl}/character`);
  };

export const getFilteredCharacters = (filterCharacter:filterCharacter)=>{
  const queryString = serializeObjectToQueryString(filterCharacter);
console.log(queryString)
console.log(`${baseUrl}/character/?${queryString}`);

    return axios.get<Characters>(`${baseUrl}/character/?${queryString}`);
}
export const getCharacterByPage =(pageNumber:number)=>{
    return axios.get<Characters>(`${baseUrl}/character?page=${pageNumber}`)
}



