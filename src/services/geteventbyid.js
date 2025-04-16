import * as httpRequest from '~/utils/httpRequest';
import axios from 'axios';
import qs from 'qs';
export const getEventById = async (id) => {
    try {
        // luon thuc hien await tu tren xuong duoi truoc
         const res = await axios({
            method: 'get',
            url: `http://localhost:3000/event-manage/event_id`,   
            params:{
                id
            }
        });
      
        const data = res.data;
       // console.log('event list :',data);
        return data;
    } catch (err) {
        console.log(err);
    }
};
