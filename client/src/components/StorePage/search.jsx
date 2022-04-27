import { Button } from '@mui/material';
import React from 'react';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
// import SearchIcon from '@mui/icons-material/Search';

const Search = ({setSortList}) => {
    return (
        <div className='search'>
            <div>
                <select className='price' id='price' onChange={(e)=>{setSortList(e.target.value)}}>
                    <option value='ntoo'>Newest to Oldest</option>
                    <option value='oton'>Oldest to Newest</option>
                    {/* <option value='htol'>Price High to Low</option>
                    <option value='ltoh'>Price Low to High</option> */}
                </select>
            </div>
            {/* <div className='search-box'>
                <input type='text'/>
                <Button className='iconbutton'><SearchIcon fontSize='small'/></Button>  
            </div> */}
        </div>
    )
}

export default Search;
