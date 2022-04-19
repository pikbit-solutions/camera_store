export default (products = [], action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'ADD_PRODUCT':
             return [...products, action.payload];
        case 'UPDATE':
            return products.map((product)=>product._id === action.payload._id?{...action.payload,_id:product._id}:product)
        case 'DEL_PRODUCT':
            return products.filter((product) => product._id !== action.payload);
        case 'SELL_PRODUCT' :
            return products.filter((product) => {
                if(product.id === action.payload)
                    product.sold = true;
                return product;
            })
        default:
            return products;
    }
}