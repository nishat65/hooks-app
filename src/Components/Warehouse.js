import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import AgGridTable from './AgGridTable'
import ContainerInfo from './ContainerInfo'
import { axiosHandler, API_URL, UNDERWORKS_URL } from '../Axios/Axios'
import { containerListingData, listingForSingleContainer } from '../Store/DataReducer/ActionsCreator'

class WareHouse extends Component {
    state = {
        colDefs: [],
        rowData: [],
        defaultColDef: {},
        step: "#step1",
        rowIndex: 0,
        containerNumber: ''
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.columnApi.autoSizeColumns()

    };

    componentDidMount() {
        const { colDefs, defaultColDef } = this.setAgGridData()

        const data = {
            email: 'wayne@underworks.com.au',
            password: 'Und3rw0rk$159!'
        }
        const headers = { CONTENT_TYPE: 'application/json' }

        axiosHandler('post', `${UNDERWORKS_URL}auth/login`, headers, data)
            .then(data => {
                return data.data.info
            })
            .catch(err => {
                return err
            })
        this.props.containerListingData()
            .then(data => {
                this.setState({
                    colDefs,
                    defaultColDef,
                    rowData: data.data.container_data.map(containerItem => {
                        return { ...containerItem, verification: 'NO' }
                    })
                })
            })
            .catch(err => {
                this.gridApi.showNoRowsOverlay()
            })
    }

    componentDidUpdate(prevProps, prevState) {
    }

    setAgGridData() {
        const colDefs = [
            {
                field: 'container_no',
                sort: 'desc',
                cellRenderer: params => {
                    let { rowIndex, data: { container_no } } = params
                    let button = document.createElement('button')
                    button.classList.add('btn-link')
                    button.onclick = (e) => this.onClickHandler(e, button.innerText, rowIndex, container_no)
                    button.innerText = params.data.container_no
                    return button
                }
            },
            {
                field: 'total_carton_data',
                width: 90,
            },
            {
                field: 'container_size',
            },
            {
                field: 'ship_date',
            },
            {
                field: 'vessel_name',
            },
            { field: 'total_carton_recorded' },
            { field: 'indents' },
            { field: 'replenishment' },
            {
                headerName: 'Verification',
                field: 'verification'
            },
        ]
        const defaultColDef = {
            sortable: true,
        }
        return { colDefs, defaultColDef }
    }

    onClickHandler = (e, innerText, rowIndex, containerno) => {
        let { step } = this.state
        this.props.listingForSingleContainer(innerText)

        const data = {
            container_no: innerText
        }
        
        if (step === "#step1") {
            this.setState({ step: '#step2' }, () => {
                this.props.listingForSingleContainer(data)
                    .then(res => {
                        this.setState({
                            tableRowData: res.data.po_line_shipping_docs,
                            rowIndex,
                            containerNumber: containerno === innerText && containerno 
                        });
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        }
    }

    onBlackClickHandler = () => {
        let { step } = this.state
        if (step === "#step2") {
            this.setState({ step: "#step1" })
        }
    }

    onClickHandlerVerification = (e, index, containerNo, affirm) => {
        let { step, rowData } = this.state
        let verifiedRowData = rowData.map((data, dataIndex) => {
            return data.container_no === containerNo ? { ...data, verification: affirm } : { ...data }
        })
        if (step === '#step2') {
            this.setState({ step: "#step1", rowData: verifiedRowData })
        }
    }

    render() {
        let { 
            colDefs, 
            rowData, 
            defaultColDef, 
            step, 
            tableRowData, 
            rowIndex,
            containerNumber
        } = this.state
        let { containerData } = this.props
        return (
            <div>

                {
                    step === "#step1" ?
                        <AgGridTable
                            onGridReady={this.onGridReady}
                            columnDefs={colDefs}
                            defaultColDef={defaultColDef}
                            rowData={rowData}
                        />
                        :
                        <ContainerInfo
                            tableRowData={tableRowData}
                            rowIndex={rowIndex}
                            containerNumber={containerNumber}
                            onClickHandlerVerification={this.onClickHandlerVerification}
                        />
                }
                {step === "#step2" && <button
                    className="display-button"
                    onClick={this.onBlackClickHandler}>Back</button>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    let { data = {} } = state
    let { containerData = [] } = data
    return {
        containerData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            containerListingData,
            listingForSingleContainer,
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(WareHouse)