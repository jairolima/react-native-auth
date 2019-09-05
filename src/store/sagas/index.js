import {all, fork, takeLatest} from 'redux-saga/effects';

import {signIn, signOut, init, signUp, getPermissions} from './auth';

import {AuthTypes} from '../ducks/auth';

export default function* rootSaga() {
  return yield all([
    init(),

    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
  ]);
}
