import axios from 'axios'

const url = 'http://localhost:5000';

const productUrl = `${url}/products`;

export const getproductApi = () => axios.get(productUrl);
export const addProductApi = (newProduct) => axios.post(productUrl , newProduct);