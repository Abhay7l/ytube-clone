import { useState,useEffect } from "react";
import { Box,Typography,Stack } from "@mui/material";
// import SideBar from "./sidebar";
import  { fetchFromAPI } from '../utils/fetchFromApi';
import {Videos,SideBar} from './index';

const Feed = () => {
   const [selectedCategory,setSelectedCategory] = useState('New');
   const [videos,setVideos] = useState([]);
   useEffect(()=>{
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
   },[selectedCategory]);

    return (
        <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
        {/* //the flex-direction will be row for small-devices and column for mid-sized} */}
        <Box sx={{ height:{sx :"auto" ,md: "92vh"}, borderRight:"1px solid #3d3d3d",px:{sx:0,md:2}}}>
            <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Typography className="copyright" variant="body2" sx={{mt:1.5,color:"#fff",}}>
            copyright 
           </Typography>
        </Box>
        
        
        <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
            <Typography variant="h4" fontWeight='bold' mb={2} 
            sx={{color:'#fff'}}>
                {selectedCategory} <span style={{color:'#FC1503'}}>
                   Videos
                </span>
            </Typography>
            <Videos videos={videos} />
        </Box>
        </Stack>
    )
}

export default Feed;