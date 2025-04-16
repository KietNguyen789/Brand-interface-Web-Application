import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import classNames from 'classnames/bind';
import styles from './Saleoffstate.scss';
import { useEffect } from 'react';
import { staSaleOff } from '~/services/statisticSale';
import axios from 'axios';
const cx = classNames.bind(styles);
function Saleoffstate() {
    // const data = [
    //     { name: 'Tháng 1', value: 1200 },
    //     { name: 'Tháng 2', value: 3000 },
    //     { name: 'Tháng 3', value: 4000 },
    //     { name: 'Tháng 4', value: 100000 },
    // ];
    // const formatYAxisTick = (tickItem) => {
    //     return tickItem.toFixed(1); // Định dạng với 2 chữ số thập phân
    // };
    const [data, setData] = useState();
    useEffect(()=>{
        const fetchapi = async (brandId) => {
            const res = staSaleOff(brandId);
            console.log('res :',res);
            res.then(url =>{
                //setData(url)
                // try{
                //     const response = await axios.get(url,{
                //         headers: {
                //             'Authorization': `Bearer ${brandId}`,
                //           },
                //     })
                //     console.log('res in promise: ',response);
                    
                //     //setData(response.data);
                // } catch(e){
                //     console.log('dashboard :',e);
                    
                // }
                setData(url);
            })
            
        }
        fetchapi(sessionStorage.getItem('brand_id'))
    },[])
    const GrafanaDashboard = () => {
        return (
            <div>
            <h1>Grafana Dashboard</h1>
            <a href={data} target="_blank" rel="noopener noreferrer" style={{color:"var(--light-check)", fontFamily:"var(--font-family-display)"}}>
              Click here go to our Dashboard
            </a>
          </div>
        );
      };
      console.log('dashboard', data);
      
    return (
        <div>
        
        <GrafanaDashboard  />
      </div>
      
       
    );
}

export default Saleoffstate;
