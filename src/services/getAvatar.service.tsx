import axios from 'axios';
import { baseUrl } from './mainAPI';

export const getAvatar = (id:number) => {
    return axios.get(`${baseUrl}/character/avatar/${id}.jpeg`);
  };