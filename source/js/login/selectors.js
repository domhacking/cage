import { name } from './constants';

export const getAll = state => state[name];
export const getErrorCode = state => state[name].errorCode;
export const isAuthorised = state => state[name].authorised;
