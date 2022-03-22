export default (products = [], action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE' :
             return products;
        default:
            return products;
    }
}