import { constants } from "./Constants";

const getGridHeight = (recipe) => {
  console.log("window.innerHeight: " + window.innerHeight);
  const appHeaderHeightInPx = 70;
  const extraMarginHeightInPx = 30;
  const availableViewportHeight =
    window.innerHeight - appHeaderHeightInPx - extraMarginHeightInPx;
  console.log("availableViewportHeight: " + availableViewportHeight);
  const gridHeaderHeightInPx = 48;
  const scrollbarHeightInPx = 26;
  const perRowHeightInPx = constants.gridRowHeight;
  const maxGridHeight =
    recipe.ingredients.length * perRowHeightInPx +
    gridHeaderHeightInPx +
    scrollbarHeightInPx;
  console.log("maxGridHeight: " + maxGridHeight);
  const gridHeight = Math.min(availableViewportHeight, maxGridHeight);
  console.log("gridHeight: " + gridHeight);
  return gridHeight;
};

export { getGridHeight };
