import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { alertReducer } from "./Reducers/alertReducer";
import { depositReducer } from "./Reducers/depositReducer";
import { memberReducer } from "./Reducers/memberReducer";
import { costReducer } from "./Reducers/costReducer";
import { otherReducer } from "./Reducers/otherReducer";

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
 
  alertReducer,
  depositReducer,
  memberReducer,
  costReducer,
  otherReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
