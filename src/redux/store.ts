import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";

const appStateString = localStorage.getItem("appState");
let appStateFromLocalStorage: any = null;
if (!!appStateString) {
  appStateFromLocalStorage = JSON.parse(appStateString);
}

if (appStateFromLocalStorage) {
  console.log("appStateFromLocalStorage", appStateFromLocalStorage);
} else {
  appStateFromLocalStorage = {};
}

let store = createStore(
  rootReducer,
  appStateFromLocalStorage,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

store.subscribe(() => {
  const appState = store.getState();
  console.log("Logging state");
  console.log(appState);
  localStorage.setItem("appState", JSON.stringify(appState));
});

export default store;
