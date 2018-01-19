import axios from 'axios';
import config from '../config';

export const getImage = async (url) => {
  return axios.get(`${config.apiUrl}screenshot`, {
    params: {
      url
    }
  });
};