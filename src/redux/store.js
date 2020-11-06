import { compose, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";
import persistState from "redux-localstorage";

const enhancer = compose(
  composeWithDevTools(applyMiddleware(reduxThunk)),
  persistState()
);

export default createStore(rootReducer, enhancer);
