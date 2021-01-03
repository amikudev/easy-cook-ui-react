import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";
import { constants } from "../utils/Constants";

const appStateString = localStorage.getItem("appState");
let appStateFromLocalStorage: any = null;
if (!!appStateString) {
  appStateFromLocalStorage = JSON.parse(appStateString);

  //clear the localStorage if appStoreVersion is not meeting specific value
  if (
    !appStateFromLocalStorage.storeVersion ||
    appStateFromLocalStorage.storeVersion.storeStructureVersion <
      constants.store.storeStructureVersion
  ) {
    localStorage.clear();
    appStateFromLocalStorage = null;
  }
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
