import {
  GENERIC_ERROR,
  GENRES_RECEIVED,
  GENRES_REQUESTED,
  MOVIES_RECEIVED,
  MOVIES_REQUESTED,
} from './constants';

export function genericError(error) {
  return {
    type: GENERIC_ERROR,
    error,
  };
}

export function moviesRequested() {
  return {
    type: MOVIES_REQUESTED,
  };
}

export function moviesReceived(data) {
  return {
    type: MOVIES_RECEIVED,
    data,
  };
}

export function genresRequested() {
  return {
    type: GENRES_REQUESTED,
  };
}

export function genresReceived(data) {
  return {
    type: GENRES_RECEIVED,
    data,
  };
}
