import {getproductApi, addProductApi, delProductApi, sellProductApi} from '../../api/apiMain.js';

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

export const delProduct = (id) => async(dispatch) => {
    try{
        await delProductApi(id);
        dispatch({type:'DEL_PRODUCT', payload:id});
    }
    catch(error){
        console.log(error);
    }
}

export const sellProduct = (id) => async(dispatch) => {
    try{
        await sellProductApi(id);
        dispatch({type:'SELL_PRODUCT', payload:id});
    }
    catch(error){
        console.log(error);
    }
}