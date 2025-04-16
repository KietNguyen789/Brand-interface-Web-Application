import * as httpRequest from '~/utils/httpRequest';
import axios from 'axios';
export const getcharPromotion = async () => {
    try {
        // luon thuc hien await tu tren xuong duoi truoc
         const res = await axios({
            method: 'get',
            url: `http://localhost:3000/event-manage/all-event`,   
          });
        // res.data.data
        const data = res.data;
        console.log('event list :',data);
        return data;
    } catch (err) {
        console.log(err);
    }
};
