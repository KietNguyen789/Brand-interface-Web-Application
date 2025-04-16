import * as httpRequest from '~/utils/httpRequest';
import axios from 'axios';
import qs from 'qs';
export const getAllEvents = async (id) => {
    try {
        // luon thuc hien await tu tren xuong duoi truoc
         const res = await axios({
            method: 'get',
            url: `http://localhost:3000/brand-manage/brandId`,   
            params:{
                id
            }
        });
        //console.log('event ids :',res.data.event_ids );
        var array_eids = [];
      
        const res_ids = Object.values(res.data.event_ids);
        res_ids.forEach(eid => {
            array_eids.push(eid);
        })
       
        //const array_eids = new Array().concat(Object.values(res.data.event_ids));
        //console.log(array_eids, Array.isArray(array_eids));
        const params=  new URLSearchParams();
        params.append('ids', JSON.stringify(array_eids)); 
        const events =  await axios.get(
           
           `http://localhost:3000/event-manage/event_ids`,   
          
        {params});
        // res.data.data
        const data = events.data;
       // console.log('event list :',data);
        return data;
    } catch (err) {
        console.log(err);
    }
};
