import mongoose from 'mongoose';

const photoSchema = mongoose.Schema({
    productId : String,
    photo : String
});

const photos = mongoose.model('photo', photoSchema);

export default photos;