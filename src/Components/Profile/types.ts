import {InferValueTypes} from "../../bll/types";
import * as actions from './actions'
import {AppThunk} from "../../bll/store";

export enum PROFILE_ACTIONS_TYPES{
    TEST='TEST',
}
export type ProfileActionsType = ReturnType<InferValueTypes<typeof actions>>
export type ProfileThunkType = AppThunk<ProfileActionsType>