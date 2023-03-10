import { useState,useEffect } from "react";
import {Link,useParams} from 'react-router-dom';
import ReactPlayer from "react-player";
import { Typography,Box,Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
// import Divider from "@mui/material";
import {Videos }from './';
import { fetchFromAPI } from "../utils/fetchFromApi";


const VideoDetail = () => {
    const [videoDetail,setVideoDetail] = useState(null);
    const [videos,setVideos] = useState(null);
    const [comment , setComment] = useState('');
    const {id} = useParams();
    // console.log(id);
    useEffect(()=>{
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => setVideoDetail(data.items[0]));

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data)=>setVideos(data.items));

        fetchFromAPI(`commentThreads?part=snippet&videoId=${id}&maxResults=${50}`)
        .then((data)=>setComment(data.items));
        // console.log(comment.textDisplay);
    },[id]);

    if(!videoDetail?.snippet) return 'Loading...';
    // if(!comment?.snippet) return 'Loading...';
    // console.log(comment.snippet);
// console.log(videoDetail.snippet.description.slice(0,50));
    const {snippet:{title,channelId,channelTitle,description},statistics:{
        viewCount,likeCount
    }} = videoDetail;
    return (
       <Box minHeight='95vh'>
        <Stack direction={{xs:'column',md:'row'}}>
            <Box flex={1}>
                <Box sx={{width:'90%',top:'86px',ml:'5%'}}>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                        className='react-player' controls 
                    />
                    <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                  {title}
                    </Typography>
                    <Stack direction='column' >
                    <Stack direction='row' justifyContent='space-between' sx={{
                        color:'#fff'
                    }}
                    py={1} px={2}>
                        <Link to={`/channel/${channelId}`}>
                            <Typography variant={{sm:'subtitle1',md:'h6'}}
                            color='#fff'>
                                {channelTitle}
                                <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
                            </Typography>
                        </Link>
                        <Stack direction='row' gap='20px' alignItems='center'>
                            <Typography variant="body1" sx={{opacity:0.7}}>
                                {parseInt(viewCount).toLocaleString()} views
                            </Typography>
                            <Typography variant="body1" sx={{opacity:0.7}}>
                                {parseInt(likeCount).toLocaleString()} likes
                            </Typography>
                        </Stack>

                        </Stack>
                        <Box >
                        <Typography sx={{p:'4px',borderRadius:'10px'}} zIndex='10' variant="subtitle1" bgcolor='gray' color='#fff'>
                            {description.slice(0,400)}
                        </Typography>
                        </Box>
                    </Stack>
                </Box>
                        {/* <Box color='#fff'> */}
                        {/* </Box> */}
            </Box>
        <Box
           px={2} py={{md:1 ,xs:5}} mr='10px' justifyContent="center"
           alignItems='center'
        >
           <Videos videos={videos} direction='column'/>
        </Box>
        </Stack>
       </Box>    
    )
}
export default VideoDetail;