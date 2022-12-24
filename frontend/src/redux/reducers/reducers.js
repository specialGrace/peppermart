import { combineReducers } from 'redux'

import {userRegisterReducer, userLoginReducer} from "./userReducers";

const reducers = combineReducers({
  userRegister: userRegisterReducer,
  userLogin:userLoginReducer
});

export default reducers;
