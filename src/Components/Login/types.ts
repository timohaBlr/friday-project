import {InferValueTypes} from "../../bll/types";
import * as actions from './actions'
import {AppThunk} from "../../bll/store";

export enum LOGIN_ACTIONS_TYPES{
    TEST='TEST',
}
export type LoginActionsType = ReturnType<InferValueTypes<typeof actions>>
export type LoginThunkType = AppThunk<LoginActionsType>