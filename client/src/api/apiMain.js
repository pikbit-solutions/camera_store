import axios from 'axios'

const url = 'http://localhost:5000';

const productUrl = `${url}/products`;
const specsUrl = `${url}/specs`;

export const getproductApi = () => axios.get(productUrl);
export const addProductApi = (newProduct) => axios.post(productUrl , newProduct);
export const updateProductApi = (id, product) => axios.patch(`${productUrl}/${id}`,product);
export const delProductApi = (id) => axios.delete(`${productUrl}/${id}`);
export const specificProApi = (Id) => axios.get(`${productUrl}/product/${Id}`);
export const sellProductApi = (id) => axios.patch(`${productUrl}/sell/${id}`);

export const avilCountApi = () => axios.get(`${productUrl}/avilcount`);
export const soldCountApi = () => axios.get(`${productUrl}/soldcount`);
export const totalRevApi = () => axios.get(`${productUrl}/totalrev`);

export const  getSpecApi = () => axios.get(specsUrl);
export const  addSpecApi = (newSpecs) => axios.post(specsUrl, newSpecs);