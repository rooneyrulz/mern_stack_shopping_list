import Axios from "axios";
import { GET_ITEM, ADD_ITEM, DELETE_ITEM, LIST_LOADING } from "./types";

export const getItems = () => dispatch => {
  dispatch(listLoading());
  Axios.get('/api/items').then(res => dispatch({
    type: GET_ITEM,
    payload: res.data
  }));
};

export const addItem = (newItem) => dispatch => {
  Axios.post('/api/item', newItem).then(res => dispatch({
    type: ADD_ITEM,
    payload: res.data
  }));
};

export const deleteItem = (id) => dispatch => {
  Axios.delete(`/api/item/${id}`).then(res => dispatch({
    type: DELETE_ITEM,
    payload: id
  }));
};

export const listLoading = () => {
  return {
    type: LIST_LOADING
  };
};