import { AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {loginReducer} from "../Components/Login/login-reducer";
import {profileReducer} from "../Components/Profile/profile-reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    profile: profileReducer,
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>

//для всех экшенов
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

//для экшенов определённого редьюсера
export type AppThunkExact<A extends AnyAction,ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, A>

export default store;

// @ts-ignore
window.store = store // for debugging