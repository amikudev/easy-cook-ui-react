import { constants } from "./Constants";
import RecipeModel from "../easy-cooking-app/model/Recipe.model";

const getGridHeight = (recipe: RecipeModel) => {
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
  let gridHeight = Math.min(availableViewportHeight, maxGridHeight);
  if (window.innerWidth < 992) {
    gridHeight = maxGridHeight;
  }
  console.log("gridHeight: " + gridHeight);
  return gridHeight;
};

const getGridColumns = (gridWidth: number) => {
  //todo: Show the columns width based on width of available text in the columns
  return [
    {
      headerName: "Item",
      field: "name",
      width: 250,
      checkboxSelection: true,
      filter: true,
      suppressMovable: true,
    },
    {
      headerName: "Quantity",
      field: "quantityAndUom",
      width: 131,
      suppressMovable: true,
    },
  ];
};

export { getGridHeight, getGridColumns };
