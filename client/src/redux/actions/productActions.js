import {getproductApi} from '../../api/apiMain.js';

export const getProducts = () => async(dispatch) => {
    try{
        const {data} = await getproductApi();
        dispatch({type:'FETCH_ALL', payload : data});
    }
    catch(error){
        console.log(error);
    }
}