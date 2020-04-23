import Actions from './Actions'
import { UNDERWORKS_URL, axiosHandler, Authorisation} from '../../Axios/Axios'

export const containerListingData = () => dispatch => {
    dispatch({
        type: Actions.SET_CONTAINER_LISTING
    })
    return new Promise((resolve, reject) => {
        axiosHandler('get',`${UNDERWORKS_URL}container-management/listing`)
        .then(res => {
            dispatch({
                type: Actions.SET_CONTAINER_LISTING_SUCCESS,
                payload: res
            })
            return resolve(res)
        })
        .catch(err => {
            dispatch({
                type: Actions.SET_CONTAINER_LISTING_SUCCESS,
                payload: err
            })
            return reject(err) 
        })
    })
}

export const listingForSingleContainer = (data) => dispatch => {
    dispatch({
        type: Actions.SET_LISTING_CONTAINER_NUMBER
    })
    return new Promise((resolve, reject) => {
        axiosHandler('get',`${UNDERWORKS_URL}container-management/shipping-po-line/listing`,{Authorisation},'', data)
        .then(res => {
            dispatch({
                type: Actions.SET_LISTING_CONTAINER_NUMBER_SUCCESS,
                payload: res
            })
            return resolve(res)
        })
        .catch(err => {
            dispatch({
                type: Actions.SET_LISTING_CONTAINER_NUMBER_FAILURE,
                payload: err
            })
            return reject(err) 
        })
    })
}