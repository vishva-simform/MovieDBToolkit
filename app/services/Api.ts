import { apiConfig } from './Utils';

export const getData = (endPoint: string) => apiConfig.get(endPoint);
