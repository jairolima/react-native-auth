import {call, put, select} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import api from '../../services/api';

import NavigationService from '../../services/navigation';

import AuthActions from '../ducks/auth';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@Omni:token');

  if (token) {
    yield put(AuthActions.signInSucess(token));
  }

  yield put(AuthActions.initCheckSucess());
}

export function* signIn({email, password}) {
  try {
    const response = yield call(api.post, 'sessions', {email, password});

    yield call([AsyncStorage, 'setItem'], '@Omni:token', response.data.token);

    localStorage.setItem('@Omni:token', response.data.token);

    yield put(AuthActions.signInSucess(response.data.token));
    NavigationService.navigate('Main');
  } catch (err) {
    console.log('ERRO');
  }
}

export function* signUp({email, password}) {
  try {
    const response = yield call(api.post, 'sessions', {email, password});

    yield call([AsyncStorage, 'setItem'], '@Omni:token', response.data.token);

    localStorage.setItem('@Omni:token', response.data.token);

    yield put(AuthActions.signInSucess(response.data.token));
    // yield put(push('/'));
  } catch (err) {
    console.log('ERRO');
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);

  // yield put(push('/signin'));
}

export function* getPermissions() {
  const signedIn = yield select(state => state.auth.signedIn);

  if (!signedIn) {
    return;
  }

  const response = yield call(api.get, 'permissions');

  const {roles, permissions} = response.data;

  yield put(AuthActions.getPermissionsSucess(roles, permissions));
}
