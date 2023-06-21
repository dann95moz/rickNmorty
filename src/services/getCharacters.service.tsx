import axios from 'axios'
import { filterCharacter } from '../interfaces/filterCharacters.interface';
import { Characters } from '../interfaces/global/characters.interface';
import { baseUrl } from './mainAPI';
import { CharactersResults } from '../interfaces/Results/charactersResults.interface';


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
    let filterUrl:string =''
    for (let i = 0; i < filterCharacter.filters.length; i++) {
      filterUrl+= `${filterCharacter.filters[i]}=${filterCharacter.value[i]}
      ${(filterCharacter.filters.length>1 && i<filterCharacter.filters.length)? '&' : ''}`
        
    }
    return axios.get<Characters>(`${baseUrl}/character/?${filterUrl}`);
}
export const getCharacterByPage =(pageNumber:number)=>{
    return axios.get<Characters>(`${baseUrl}/character?page=${pageNumber}`)
}



