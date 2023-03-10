import { Box } from "@mui/material";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {Videos,ChannelCard} from './';
import { fetchFromAPI } from "../utils/fetchFromApi";
const ChannelDetail = () => {
    const [channelDetail,setChannelDetail] = useState(null);
    const [videos,setVideos] = useState([]);
    const { id } = useParams();
    // console.log(channelDetail,videos);
    useEffect(()=>{
      fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
    },[id]);
    if(!channelDetail?.length) return 'Loading...';
    return (
       <Box minHeight='95vh'>
        <Box>
          <div style={{
background:` linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(138,98,191,1) 29%, rgba(253,187,45,1) 100%)`,
         zIndex:10,
         height:'300px',
          }}/>
           <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
        </Box>
        <Box display='flex' p='2'>
          <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videos}/>
        </Box>
       </Box>
      )
}
export default ChannelDetail;