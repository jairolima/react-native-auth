import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  signInRequest: ['email', 'password'],
  signInSucess: ['token'],
  getPermissionsSucess: ['roles', 'permission'],
  initCheckSucess: null,
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  authChecked: false,
  signedIn: false,
  token: null,
  roles: [],
  permissions: [],
});

export const sucess = (state, {token}) => state.merge({signedIn: true, token});

export const checkSucess = state => state.merge({authChecked: true});

export const logout = state => state.merge({signedIn: false, token});

export const permissionsSucess = (state, {roles, permissions});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCESS]: sucess,
  [Types.GET_PERMISSIONS_SUCESS]: permissions,
  [Types.INIT_CHECK_SUCESS]: checkSucess,
});
