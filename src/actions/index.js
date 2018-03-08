import {
    FEATCH_LISTS,
    SORT_LISTS,
} from './types';
import lists from './../lists'
import selectionSort from './../utils/selectionSort';


export const featchLists = () => async dispatch => {
    dispatch({
        type: FEATCH_LISTS,
        payload: lists
    });
};

export const sortLists = (list, comparator) => async dispatch => {
    let result = await selectionSort(list.slice(), comparator);
    dispatch({
        type: SORT_LISTS,
        lists: result,
    })
}