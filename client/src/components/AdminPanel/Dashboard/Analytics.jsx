import React, {useEffect} from 'react'
import ReactGA from 'react-ga4'

const TrackingID = 'G-12W1P93F6W';


const Analytics = () => {
  useEffect ( () => {
    ReactGA.initialize(TrackingID)
  },[])

  return (
    <div className="admin-content-right">
        <div className='dash-main'>
          <div className ='dash-box'>
            <div className='dash-box-left'>

              <div className='dash-left-title'>Available Products</div>
              <div className='dash-left-number'>33</div>

            </div>

            <div className='dash-mid-line'></div>

            <div className='dash-box-right'> 
              {/* <div className='dash-right-info'><div>Total sold</div><div> : 58</div></div>
              <div className='dash-right-info'><div>Total revenue</div><div> : 200,000.00</div></div>
              <div className='dash-right-info'><div>Total views</div><div> : 37,898</div></div> */}
              <table>
                <tr className='dash-right-info'><td>Total sold</td><td>: 58</td></tr>
                <tr className='dash-right-info'><td>Total revenue</td><td>: 200,000.00</td></tr>
                <tr className='dash-right-info'><td>Total views</td><td>: 37,898</td></tr>
              </table>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Analytics
