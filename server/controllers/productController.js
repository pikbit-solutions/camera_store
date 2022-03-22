// import products from '../models/productModel.js';
import Products from '../models/productModel.js'

export const getProducts = async (req ,res)=>{
    try{
        const products = await Products.find();
        res.json(products);
    }catch(err){
        res.status(404).json(err);
    }
}

export const addProduct = async (req, res) => {
    const newProduct = new Products(req.body);
    try{
        await newProduct.save();
        res.json("Added"); 
    }catch(err){
        res.status(404).json({message : err.message});
    }
}