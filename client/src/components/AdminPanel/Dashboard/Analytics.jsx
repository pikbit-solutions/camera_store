import React, {useEffect,useState} from 'react'
import ReactGA from 'react-ga4'
import {avilCountApi,soldCountApi,totalRevApi} from '../../../api/apiMain';

// const TrackingID = 'G-12W1P93F6W';


const Analytics = () => {

    const [avilCount,setAvilCount] = useState(0); 
    const [soldCount,setSoldCount] = useState(0); 
    const [totalRev,setTotalRev] = useState(0); 
    const fetchProduct = async () => {
        try {
            const {data:data1} = await avilCountApi();
            setAvilCount(data1);
            const {data:data2} = await soldCountApi();
            setSoldCount(data2);
            const data3 = await totalRevApi();
            const [data4] = data3.data;
            setTotalRev(data4.TotalSum);
            // console.log(data1, data2, data4);

        }
        catch (error) {
            console.log(error.message);
        }
    }
    fetchProduct();

  // useEffect ( () => {
  //   ReactGA.initialize(TrackingID)
  // },[])

  return (
    <div className="admin-content-right">
        <div className='dash-main'>
          <div className ='dash-box'>
            <div className='dash-box-left'>

              <div className='dash-left-title'>Available Products</div>
              <div className='dash-left-number'>{avilCount}</div>

            </div>

            <div className='dash-mid-line'></div>

            <div className='dash-box-right'> 
              <table>
                <tr className='dash-right-info'><td>Total sold</td><td>: {soldCount}</td></tr>
                <tr className='dash-right-info'><td>Total revenue</td><td>: Rs.{totalRev}.00</td></tr>
                <tr className='dash-right-info'><td>Total views</td><td>: 37,898</td></tr>
              </table>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Analytics
