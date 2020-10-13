import React from "react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './Recipe.css';

export default class Recipe extends React.Component {

    render() {
        // const rowData =
        return (
            <React.Fragment>
                <h1>{this.props.recipe.title}</h1>
                <div className="ag-theme-alpine" style={ { height: 400, width: 600 } }>
                    <AgGridReact
                        rowData={this.props.recipe.ingredients}>
                        <AgGridColumn field="name" headerName="Ingredient name"></AgGridColumn>
                        <AgGridColumn field="quantity" headerName="Quantity"></AgGridColumn>
                        <AgGridColumn field="uom" headerName="Unit"></AgGridColumn>
                    </AgGridReact>
                </div>
            </React.Fragment>
        );
    }
}
