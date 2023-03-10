import { Box,CardContent,CardMedia,Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channelDetail,marginTop}) => (
 <Box 
 sx={{
    boxShadow:'none',
    borderRadius:'20px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:{xs :'356px',md:'320px',lg:'320px'},
    height:'326px',
    margin:'auto',
    marginTop,
 }}
 >
 <Link to={`/channel/${channelDetail?.id?.channelId}`}>
    <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
      <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url ||demoProfilePicture} 
      alt={channelDetail?.snippet?.tittle}
      sx={{brderRadius:'50%',height:'180px',
      width:'180px',mb:2,border:'1px solid #e3e3e3'}}/>
    <Typography variant='h6'>
        {channelDetail?.snippet?.title}
        <CheckCircle sx={{fontSize:14,color:'grey',ml:'5px'}}></CheckCircle>
    </Typography>
    {channelDetail?.statistics?.subscriberCount && (
        <Typography>
            {parseInt(channelDetail?.snippet?.statistics?.subscriberCount).toLocaleString()}Subsciber
        </Typography>
    )}
    </CardContent>
 </Link>

 </Box>
)
   


export default ChannelCard;