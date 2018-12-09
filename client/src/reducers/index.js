import { combineReducers } from "redux";
import shoppingListReducer from "./shoppingListReducer";

export default combineReducers({
  shoppingListReducer: shoppingListReducer
});