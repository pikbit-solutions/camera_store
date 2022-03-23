// import products from '../models/productModel.js';
import mongoose from 'mongoose';
import products from '../models/productModel.js';
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

export const delProduct = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send('No such product');
    await products.findByIdAndRemove(id);
    res.json({message:'deleted !'});
}