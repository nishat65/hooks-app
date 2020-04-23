import React, { Component } from 'react'
import AgGridTable from './AgGridTable'
import { connect } from 'react-redux'

class ContainerInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colDefs: [],
            rowData: [],
            defaultColDef: {},
            validationCheck: [],
            rowIndex: 0,
            disabled: true,
            containerNo: ''
        }
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        params.columnApi.autoSizeColumns()

        const { colDefs, defaultColDef } = this.setAgGridData()

        this.gridApi.showLoadingOverlay()
        this.setState({ colDefs, defaultColDef })
    };

    setAgGridData() {
        const colDefs = [
            {
                field: 'id',
                sort: 'desc',
            },
            {
                field: 'carton_type',
                width: 90,
            },
            {
                field: 'allocated_product_qty',
            },
            {
                field: 'allocated_cartons',
            },
            {
                field: 'product',
            },
            {
                headerName: 'QA flag',
                field: 'qa_flag',
                editable: true
            }
        ]
        const defaultColDef = {
            sortable: true,
        }
        return { colDefs, defaultColDef }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            rowData: props.tableRowData,
            rowIndex: props.rowIndex,
            containerNo: props.containerNumber
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let { validationCheck } = this.state
        if(prevState.validationCheck.length !== validationCheck.length 
            && 
        this.gridApi.getDisplayedRowCount() === validationCheck.length){
            this.setState({disabled: false})
        }
    }

    onCellValueChanged = params => {
        this.data = params.data.qa_flag
    }

    onCellKeyPress = (params) => {
        if (params.event.code === 'Enter') {
            this.setState({validationCheck: [...this.state.validationCheck, true]})
        }
    }

    render() {
        let { 
            colDefs, 
            rowData, 
            defaultColDef, 
            validationCheck, 
            disabled,
            rowIndex,
            containerNo
        } = this.state
        let { onClickHandlerVerification } = this.props
        return (
            <div>
                <AgGridTable
                    tableRowData={this.state.rowData}
                    onGridReady={this.onGridReady}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    rowData={rowData}
                    onCellValueChanged={this.onCellValueChanged}
                    onCellKeyPress={this.onCellKeyPress}
                />
                <button className={`display-button 
                ${ validationCheck.length < 1 ? 
                    'not-allowed-btn': 'allowed-btn'}`
                } 
                onClick={(e) => onClickHandlerVerification(e,rowIndex, containerNo, 'YES')}
                disabled={disabled}
                >Check List</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        singleContainerData: state.data.singleContainerData
    }
}

export default connect(mapStateToProps)(ContainerInfo);
// export default ContainerInfo