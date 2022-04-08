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

export const updateProduct = async (req,res)=>{
    const { id } = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send('No such product');
    const updatedProduct = await products.findByIdAndUpdate(id,{...product,id},{new:true});
    res.json(updatedProduct);
}

export const getSpecific = async (req,res)=>{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send('No such product');
    const Product = await Products.findById(id);
    res.json(Product);
}

export const getAvilCount = async(req,res)=>{
    try{
        const avilCount = await products.find({sold:false}).count()
        res.json(avilCount)
    }catch(error){
        res.status(404).json(error);
    }
}

export const getSoldCount = async(req,res)=>{
    try{
        const avilCount = await products.find({sold:true}).count()
        res.json(avilCount)
    }catch(error){
        res.status(404).json(error);
    }
}

export const getTotalRev = async(req,res)=>{
    try{
        const totalRev = await products.aggregate([ { $match: { sold: true } }, 
                                                    { $group: { _id: null, 
                                                                TotalSum: { $sum: "$price" } 
                                                } } ])
        res.json(totalRev)
    }catch(error){
        res.status(404).json(error);
    }
}

export const sellProduct = async(req,res)=>{
    const {id} = req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)) 
            return res.status(404).send('No such product');
        const soldItem =await products.findByIdAndUpdate(id,{sold:true},{new:true});
        res.json(soldItem);

    }catch(error){
        res.status(404).json(error);
    }
}
