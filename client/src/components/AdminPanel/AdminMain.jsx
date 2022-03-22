import React from 'react'
import AdminNav from './AdminNav'
import AdminContent from './AdminContent'

const AdminMain = () => {
    return (
        <div className='admin-page'>
            <AdminNav/>
            <AdminContent/>
        </div>
    )
}

export default AdminMain
