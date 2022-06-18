import axios from "axios";

export const options = {  
    method: "GET",  
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
  }
};

export const fetchStories = async (url,options) => {
    const response = await axios(url, options);
    return response.data;
}


