import { name } from './constants';

export const getAll = state => state[name];
export const getErrorCode = state => state[name].errorCode;
export const isRegistered = state => state[name].registered;
