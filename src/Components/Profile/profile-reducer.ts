import * as actions from './actions'
import {PROFILE_ACTIONS_TYPES, ProfileActionsType, ProfileThunkType} from "./types";


type ProfileStateType = typeof initialState

const initialState = {}

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case PROFILE_ACTIONS_TYPES.TEST:
            return {...state};
        default:
            return state
    }
}
