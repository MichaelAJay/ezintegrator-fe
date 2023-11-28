import axios from 'axios';
import { EZI_API_BASE_URL } from './constants';

export const eziApiClient = axios.create({
    baseURL: EZI_API_BASE_URL
});