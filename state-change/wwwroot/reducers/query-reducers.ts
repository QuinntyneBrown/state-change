import { SetQueryAction } from "../actions/query-actions";

export const setQueryReducer = (state, action) => {
    if (action instanceof SetQueryAction) { state.query = action.query; }
    return state;
}