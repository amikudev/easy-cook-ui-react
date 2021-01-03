const constants: any = {
  gridRowHeight: 33,
  serviceUrlBackup: "http://localhost:3000/mockdata.json",
  serviceUrl: "https://easy-cooking-services.herokuapp.com/recipe",
  store: {
    storeStructureVersion: 6, //if you increase me,
    // the localstorage state will be cleared from all the browsers and new state will be constructed for them,
    // whenever they load the app next time..
  },
};

export { constants };
