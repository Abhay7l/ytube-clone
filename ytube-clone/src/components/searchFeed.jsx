import { useState,useEffect } from "react";
import { Box,Typography } from "@mui/material";
// import SideBar from "./sidebar";
import  { fetchFromAPI } from '../utils/fetchFromApi';
import {Videos} from './index';
import { useParams } from "react-router-dom";
const SearchFeed = () => {
//    const [selectedCategory,setSelectedCategory] = useState('New');
   const {searchTerm} = useParams();//this will be populated by everything after search/ in url;
   const [videos,setVideos] = useState([]);
   useEffect(()=>{
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
   },[searchTerm]);

    return (
        <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" fontWeight='bold' mb={2} 
        sx={{color:'#fff'}}>
            Search Result for : <span style={{color:'#FC1503'}}>
               {searchTerm}
            </span>
        </Typography>
        <Videos videos={videos} />
    </Box>
    )
}

export default SearchFeed;