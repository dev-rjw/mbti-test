import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response;
};

export const getUserProfile = async (token) => {
    const response = await axios.get(`${API_URL}/login`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

export const updateProfile = async (token, formData) => {
    const response = await axios.patch(`${API_URL}/profile`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};
