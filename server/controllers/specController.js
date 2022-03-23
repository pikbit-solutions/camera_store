// import Specs from '../models/specModel.js';

// export const getSpecs = async (req ,res)=>{
//     try{
//         const specs = await Specs.find();
//         res.json(specs);
//     }catch(err){
//         res.status(404).json(err);
//     }
// }

// export const addSpecs = async (req, res) => {
//     const newSpecs = new Specs(req.body);
//     try{
//         await newSpecs.save();
//         res.json("Added"); 
//     }catch(err){
//         res.status(404).json({message : err.message});
//     }
// }