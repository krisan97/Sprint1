import {
  SELECT_LIBRARY,
  RESET_RESOURCE
 } from './types';

 export const selectLibrary = (libraryId) => {
  return {
    type: SELECT_LIBRARY,
    payload: libraryId
  };
};

export const resetResource = () => {
  return {
    type: RESET_RESOURCE
  };
};
