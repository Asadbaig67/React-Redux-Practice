import { combineReducers } from "redux"
import amountReducer from "./amountReducer"
import togglemode from "./modetoggle";

const reducer = combineReducers({
    amount: amountReducer,
    mode: togglemode
})

export default reducer;