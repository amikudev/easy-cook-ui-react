import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { constants } from "../../../../utils/Constants";
import { getGridHeight } from "../../../../utils/layoutCalculations";

export default class IngredientGrid extends React.Component {
  render() {
    let gridHeight = getGridHeight(this.props.recipe);
    let gridStyle = {
      height: gridHeight,
      width: 500,
    };
    return (
      <div className="ag-theme-alpine" style={gridStyle}>
        <AgGridReact
          rowData={this.props.recipe.ingredients}
          rowSelection="multiple"
          rowHeight={constants.gridRowHeight}
        >
          <AgGridColumn
            field="name"
            headerName="Item"
            filter={true}
            checkboxSelection={true}
            sortable={true}
          ></AgGridColumn>
          <AgGridColumn
            field="displayQuantity"
            headerName="Quantity"
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field="uom"
            headerName="Unit"
            filter={true}
          ></AgGridColumn>
        </AgGridReact>
      </div>
    );
  }
}
