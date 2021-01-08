import React, {useState} from 'react';
import {AgGridReact, AgGridColumn} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


export const Actions = () => {
    const [gridApi, setGridApi] =useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        {action:" ", category:"", duedate:"", timeestimate:"", timetracked:""},
    ]);

    return (
    <div className="ag-theme-alpine" style={{height:400, width:1000}}>
        <h4> A schedule of actions for the day</h4>
        <AgGridReact 
        rowData={rowData}>
            <AgGridColumn field="action"></AgGridColumn>
            <AgGridColumn field="category"></AgGridColumn>
            <AgGridColumn field="duedate"></AgGridColumn>
            <AgGridColumn field="timeestimate"></AgGridColumn>
            <AgGridColumn field="timetracked"></AgGridColumn>   
            <AgGridColumn field="date completed"></AgGridColumn>                                  
        </AgGridReact>
        <button>Import</button>
        <button>Export</button>
        </div>
    );
};
