import axios from "axios";
// import REACT_APP_RAPID_API_KEY from '../'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchFromAPI = async (url) => {
   const { data } = await axios.get(`${BASE_URL}/${url}`,options);
//    this is like /base-url/videos here everything starts from base-url

   return data;
  }