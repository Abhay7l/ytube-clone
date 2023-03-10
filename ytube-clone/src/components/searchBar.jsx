import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper,IconButton } from "@mui/material";
import {Search} from '@mui/icons-material'

const SearchBar = () => {
    const [searchTerm , setSearchTerm] =useState('');
    const navigate =useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchTerm){//1:56 min
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    }


    return (
        //paper is like a div element;
        <Paper 
        component='form'
        elevation={12}
        onSubmit = {handleSubmit}
        sx={{
            borderRadius:20,
            border:'1px solid #e3e3e3',
            pl:2,
            boxShadow:'none',
            mr:{sm:5}
        }}
        >
            <input 
            className="search-bar"
            placeholder='search...'
            vlaue={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <IconButton type="submit" sx={{
                p:'10px',color:'red'}}>
                <Search/>
            </IconButton>
        </Paper>
    )
}

export default SearchBar;