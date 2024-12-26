import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const ApiService = async (
  method,
  url,
  data = null,
  params = null,
  headers = {}
) => {
  try {
    const response = await axios({
      method,
      url: `${API_BASE_URL}${url}`,
      data,
      params,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response || error.message);
    throw error;
  }
};

export default ApiService;
