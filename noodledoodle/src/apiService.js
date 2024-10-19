import axios from 'axios';

//const API_BASE_URL = 'https://9fhq16841a.execute-api.us-east-2.amazonaws.com/dev';
//const API_BASE_URL = 'https://9fhq16841a.execute-api.us-east-2.amazonaws.com/test';
const API_BASE_URL = 'https://9fhq16841a.execute-api.us-east-2.amazonaws.com/dev';


export const getInventory = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/inventory-management/inventory`);
    //const v = response.json();
    return response.data;
  } catch (error) {
    console.error('Error fetching inventory', error);
    throw error;
  }
};

export const getItemById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/inventory-management/inventory/items/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching item by id', error);
        throw error;
    }
};

export const getItemsByName = async (name) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/inventory-management/inventory/items`, {
            params: { name }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching items by name', error);
        throw error;
    }
};