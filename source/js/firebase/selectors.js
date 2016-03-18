import { name } from './constants';

export const getAll = state => state[name];
export const getRef = state => state[name]['ref'];
