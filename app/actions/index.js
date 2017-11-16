import * as types from './actionTypes';
import * as service from '../services/service';

const addItems = data => {
    return {
        type: types.ADD_ITEMS,
        payload: data
    }
}

const addItem = (id, data) => {
    return {
        type: types.ADD_ITEM,
        id: id,
        payload: data
    }
}

const fetchItems = (offset, limit) => (dispatch) => service.fetchItems(offset, limit).then(response => dispatch(addItems(response.data)));
const fetchItem = (id) => (dispatch) => service.fetchItem(id).then(response => dispatch(addItem(id, response.data)));

export const getItems = (offset, limit) => (dispatch) => dispatch(fetchItems(offset, limit));
export const getItem = (id) => (dispatch) => dispatch(fetchItem(id));