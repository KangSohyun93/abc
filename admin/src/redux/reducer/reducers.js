import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";
import { productReducer } from "./ProductReducer";


const reducer = combineReducers({
    user: userReducer,
    product: productReducer,
})
export default reducer;