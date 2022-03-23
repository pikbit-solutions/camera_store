import { combineReducers } from "redux";
import products from './productReducer';
import specifications from './specReducer';

export default combineReducers({
    products,
    // specifications
})