import React from 'react'
import Delete from '@mui/icons-material/Delete';


const ProItem = ({ imgLink, DelItem }) => {

    return (
        <div>
            <div className='rev-admin-rev-container'>
                <div className='rev-admin-image'>
                    <img src={imgLink} alt="pro-img" />
                </div>
                <div className='rev-admin-del-btn-container'>
                    <div className='rev-admin-del-btn' onClick={DelItem}>
                        <Delete />
                        <label>Remove</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProItem //exported to <<AddGalleryImage , AddReview>>