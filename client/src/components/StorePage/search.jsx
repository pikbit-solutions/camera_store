import { Button } from '@mui/material';
import React from 'react';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import SearchIcon from '@mui/icons-material/Search';

function search() {
    return (
        <div className='search'>
            <div>
                <select className='price' id='price'>
                    <option value='htol'>Price High to Low</option>
                    <option value='ltoh'>Price Low to High</option>
                </select>
                <select className='arrival-time' id='time'>
                    <option value=''>Newest to Oldest</option>
                    <option value=''>Oldest to Newest</option>
                </select>
            </div>
            <div className='search-box'>
                <input type='text'/>
                <Button className='iconbutton'><SearchIcon fontSize='small'/></Button>  
            </div>
        </div>
    )
}

export default search;
