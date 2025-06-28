import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/pools";

export const addPoolToDb = async(poolData) => {
    return await axios.post(`${BASE_URL}/add`, poolData);// thiz line adds data to db
}

export const getPoolsByManager = async(fundManager) => { // The input is adderesss of fund manager
    return await axios.get(`${BASE_URL}/manager/${fundManager}`);
}

export const getAllPools = async() => {
    return await axios.get(`${BASE_URL}/all`);
}

export const deletePool = async(poolId) => {
    return await axios.delete(`${BASE_URL}/${poolId}`);
}