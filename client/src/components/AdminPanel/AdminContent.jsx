import React, { useState } from 'react'
import AddRemove from './AddRemove';
import Dashboard from './Dashboard/Dashboard';
import SoldItems from './SoldItems/SoldItems';
import AddReview from './AddReview/AddReview';
import AddGalleryImage from './AddGalleryImage/AddGalleryImage';
// import Dashboard from './Dashboard/Dashboard'
// import AddProduct from './AddRemove/AddProduct'

const AdminContent = () => {
    const [panelActive, setPanelActive] = useState(true);
    const panelActivator = () => {
        setPanelActive(!panelActive);
    }

    const [dashboardBtn, setDashboardBtn] = useState(<Dashboard />);

    const dashboard = () => { setDashboardBtn(<Dashboard />) }
    const addRm = () => { setDashboardBtn(<AddRemove />) }
    const soldItems = () => { setDashboardBtn(<SoldItems />) }
    const RevFeed = () => { setDashboardBtn(<AddReview />) }
    const GalleryImages = () => { setDashboardBtn(<AddGalleryImage />) }
    const other = () => { setDashboardBtn("other") }

    return (
        <div>
            <div className='admin-content'>
                <div className={panelActive ? 'admin-content-left' : 'panel-deactive'}>
                    <div className='panel-items'>
                        <div className='panel-item' onClick={dashboard}>Dashboard</div>
                        <div className='panel-item' onClick={addRm}>Product add/remove</div>
                        <div className='panel-item' onClick={soldItems}>Sold Items</div>
                        <div className='panel-item' onClick={RevFeed}>Review feedbacks</div>
                        <div className='panel-item' onClick={GalleryImages}>Gallery Images</div>
                        <div className='panel-item' onClick={other}>other</div>
                    </div>
                </div>

                <div className='admin-content-right'>
                    {dashboardBtn}
                </div>
            </div>
            <div className={panelActive ? 'panel-toggler' : 'panel-toggler-switch'} onClick={panelActivator}>
                {panelActive ? ' 〈' : ' 〉'}
            </div>
        </div>

    )
}

export default AdminContent
