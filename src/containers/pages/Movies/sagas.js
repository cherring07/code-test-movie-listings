import { takeLatest, call, put } from 'redux-saga/effects';

import request from '../../../utils/request';

import { GENRES_REQUESTED, MOVIES_REQUESTED } from './constants';

import { genericError, genresReceived, moviesReceived } from './actions';

const key = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;

const createUrl = params =>
  `https://api.themoviedb.org/3/${params}?api_key=${key}`;

export function* getMovies() {
  const requestURL = createUrl('movie/now_playing');

  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
    });

    yield put(moviesReceived(response));
  } catch (err) {
    yield put(genericError(err));
  }
}

export function* getGenres() {
  const requestURL = createUrl('genre/movie/list');

  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
    });

    yield put(genresReceived(response));
  } catch (err) {
    yield put(genericError(err));
  }
}

export function* moviesSaga() {
  yield takeLatest(GENRES_REQUESTED, getGenres);
  yield takeLatest(MOVIES_REQUESTED, getMovies);
}

export default [moviesSaga];
