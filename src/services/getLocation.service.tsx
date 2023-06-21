import axios from 'axios';
import { baseUrl } from './mainAPI';

export const getLocations = (id?:number) => {
    return axios.get(`${baseUrl}/location${id ? `/${id}` : ''}`);
  };