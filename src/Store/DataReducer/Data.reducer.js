import Actions from './Actions'

const INITIAL_STATE = {
    containerData: [],
    singleContainerData: [],
    error: false
}

const dataReducer = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case Actions.SET_CONTAINER_LISTING:
            return {
                ...state,
            }
        case Actions.SET_CONTAINER_LISTING_SUCCESS:
            return {
                ...state,
                containerData: [...payload.data.container_data],
            }
        case Actions.SET_CONTAINER_LISTING_FAILURE:
            return {
                ...state,
                error: true
            }
        case Actions.SET_LISTING_CONTAINER_NUMBER:
            return {
                ...state, 
            }
        case Actions.SET_LISTING_CONTAINER_NUMBER_SUCCESS:
            return {
                ...state,
                singleContainerData: [...payload.data.po_line_shipping_docs]
            }
        case Actions.SET_LISTING_CONTAINER_NUMBER_FAILURE:
            return {
                ...state, 
                error: true
            }
        default:
            return state
    }
}

export default dataReducer