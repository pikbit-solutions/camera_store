import axios from 'axios'

const url = 'http://localhost:5000';

const productUrl = `${url}/products`;
const specsUrl = `${url}/specs`;

export const getproductApi = () => axios.get(productUrl);
export const addProductApi = (newProduct) => axios.post(productUrl , newProduct);
export const delProductApi = (id) => axios.delete(`${productUrl}/${id}`);

export const  getSpecApi = () => axios.get(specsUrl);
export const  addSpecApi = (newSpecs) => axios.post(specsUrl, newSpecs);