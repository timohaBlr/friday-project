import * as actions from './actions'
import {LOGIN_ACTIONS_TYPES, LoginActionsType, LoginThunkType} from "./types";


type LoginStateType = typeof initialState

const initialState = {}

export const loginReducer = (state: LoginStateType = initialState, action: LoginActionsType): LoginStateType => {
    switch (action.type) {
        case LOGIN_ACTIONS_TYPES.TEST:
            return {...state};
        default:
            return state
    }
}
