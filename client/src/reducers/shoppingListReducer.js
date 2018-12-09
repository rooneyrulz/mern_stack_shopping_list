import { ADD_ITEM, GET_ITEM, DELETE_ITEM, LIST_LOADING } from "../actions/types";

const initialState = {
  items: [],
  loading: false
};

const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: 
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    case GET_ITEM: 
      return {
        ...state,
        items: action.payload,
        loading: false
      };

    case DELETE_ITEM: 
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };

    case LIST_LOADING: 
      return {
        ...state,
        loading: true
      };
    
    default:
      return state;
  }
};

export default shoppingListReducer;