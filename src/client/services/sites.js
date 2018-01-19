import axios from 'axios';
import config from '../config';

export const getSites = async () => {
  return axios.get(`${config.apiUrl}sites`);
};