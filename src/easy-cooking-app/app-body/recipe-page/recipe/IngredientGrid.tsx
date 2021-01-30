import React from "react";
import { AgGridReact } from "ag-grid-react";
import { constants } from "../../../../utils/Constants";
import {
  getGridColumns,
  getGridHeight,
  GridLayoutInfo,
} from "../../../../utils/layoutCalculations";
import RecipeModel from "../../../model/Recipe.model";
import { GridReadyEvent, RowDataChangedEvent } from "ag-grid-community";

interface IngredientGridInterface {
  recipe: RecipeModel;
  editable: boolean;
}

const IngredientGrid: React.FC<IngredientGridInterface> = (props) => {
  let gridLayoutInfo: GridLayoutInfo = getGridHeight(props.recipe);
  // console.error("gridLayoutInfo", gridLayoutInfo);
  let gridStyle = {
    height: gridLayoutInfo.height,
    width: 400,
  };
  const gridReadyHandler = (event: GridReadyEvent) => {
    //event.api.setRowData(props.recipe.ingredients);
    console.error("Grid ready handler is fired");
    event.api.checkGridSize();
    setTimeout(() => {
      event.api.setDomLayout(gridLayoutInfo.agGridLayoutType);
    }, 1000);
  };

  const gridRowDataChangeHandler = (event: RowDataChangedEvent) => {
    //event.api.setRowData(props.recipe.ingredients);
    console.error("gridRowDataChangeHandler is fired");
    event.api.setDomLayout(gridLayoutInfo.agGridLayoutType);
    setTimeout(() => {
      event.api.setDomLayout(gridLayoutInfo.agGridLayoutType);
    }, 1000);
  };
  let gridColumns = getGridColumns(500, props.editable);
  return (
    <div className="ag-theme-alpine" style={gridStyle}>
      <AgGridReact
        rowData={props.recipe.ingredients}
        rowSelection="multiple"
        rowHeight={constants.gridRowHeight}
        columnDefs={gridColumns}
        domLayout={gridLayoutInfo.agGridLayoutType}
        onGridReady={(event) => gridReadyHandler(event)}
        onGridSizeChanged={(event) => gridReadyHandler(event)}
        onRowDataChanged={(event: RowDataChangedEvent) =>
          gridRowDataChangeHandler(event)
        }
      ></AgGridReact>
    </div>
  );
};

export default IngredientGrid;
