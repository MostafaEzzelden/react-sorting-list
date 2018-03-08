import {
    FEATCH_LISTS,
    SORT_LISTS
} from '../actions/types';

const INIT_STATE = {
    lists: [],
}


export default function(state = INIT_STATE, action) {

    switch (action.type) {
        case FEATCH_LISTS:
            return {
                ...state,
                lists: action.payload.slice(),
            }

        case SORT_LISTS:
            return {
                ...state,
                lists: action.lists,
            }

        default:
            return state;
    }
}