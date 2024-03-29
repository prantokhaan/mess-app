import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { alertReducer } from "./Reducers/alertReducer";
import { depositReducer } from "./Reducers/depositReducer";
import { memberReducer } from "./Reducers/memberReducer";
import { costReducer } from "./Reducers/costReducer";
import { otherReducer } from "./Reducers/otherReducer";
import { bazarReducer } from "./Reducers/bazarReducer";
import { notReducer } from "./Reducers/notReducer";
import { userReducer } from "./Reducers/userReducer";

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
 
  alertReducer,
  depositReducer,
  memberReducer,
  costReducer,
  otherReducer,
  bazarReducer,
  notReducer,
  userReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
