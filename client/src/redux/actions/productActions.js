import {getproductApi, addProductApi} from '../../api/apiMain.js';

export const getProducts = () => async(dispatch) => {
    try{
        const {data} = await getproductApi();
        dispatch({type:'FETCH_ALL', payload : data});
    }
    catch(error){
        console.log(error);
    }
}

export const addProduct = (newProduct) => async(dispatch) => {
    try{
        const {data} = await addProductApi(newProduct);
        dispatch({type:'ADD_PRODUCT', payload : data});
    }
    catch(error){
        console.log(error);
    }
}