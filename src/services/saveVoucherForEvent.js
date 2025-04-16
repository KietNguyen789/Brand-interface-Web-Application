import axios from 'axios';
//import * as httpRequest from '~/utils/httpRequest';

export const savesub = async (event_id, qr_code, value, description, expiration_date, status ) => {
    try {
        // luon thuc hien await tu tren xuong duoi truoc
       
        const res = await axios({method:'post', url:`http://localhost:3000/voucher-manage/register`,
            data: {
                
                event_id,
                qr_code,
                value,
                description,
                expiration_date,
                
                status
                
            },
            headers: 'Content-Type: application/json'

            
        });
        // res.data.data
        console.log(res);
        //return res.data;
    } catch (err) {
        console.log(err);
    }
};
