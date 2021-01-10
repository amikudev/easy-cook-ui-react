import { constants } from "./Constants";
import RecipeModel from "../easy-cooking-app/model/Recipe.model";

const getSidebarHeight: () => number = () => {
  const appBodyElement: HTMLElement = document.getElementById("app-body")!;
  const sidebarTopMarginInPx = 20;
  const sidebarBottomMarginInPx = 20;
  const appHeaderHeight = 56;
  if (appBodyElement) {
    const appBodyHeight = appBodyElement.offsetHeight;

    return appBodyHeight - (sidebarTopMarginInPx + sidebarBottomMarginInPx);
  } else {
    return (
      window.innerHeight -
      (appHeaderHeight + sidebarTopMarginInPx + sidebarTopMarginInPx)
    );
  }
};

const getRecipeSearchComponentHeight: (
  sidebarHeightInPx: number,
  selectedRecipeCount: number
) => number = (sidebarHeightInPx, selectedRecipeCount) => {
  let recipeSearchComponentHeight = 10;
  const appBodyElement: HTMLElement = document.getElementById(
    "selected-recipes-container"
  )!;
  if (appBodyElement) {
    recipeSearchComponentHeight =
      sidebarHeightInPx - appBodyElement.offsetHeight;
  } else {
    if (selectedRecipeCount === 0) {
      recipeSearchComponentHeight = sidebarHeightInPx - 20; //10 padding
      // pixel up and down
    } else {
      recipeSearchComponentHeight =
        sidebarHeightInPx - (32 + 29 * selectedRecipeCount) - 20;
    }
  }
  console.log("recipeSearchComponentHeight", recipeSearchComponentHeight);
  return recipeSearchComponentHeight;
};

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

export {
  getGridHeight,
  getGridColumns,
  getSidebarHeight,
  getRecipeSearchComponentHeight,
};
