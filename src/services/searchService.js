import axios from 'axios';
//import * as httpRequest from '~/utils/httpRequest';

export const search = async (brand_id,event_name ) => {
    try {
        // luon thuc hien await tu tren xuong duoi truoc
        const res = await axios.get(`http://localhost:3000/event-manage/event_by_name`, {
            params: {
                brand_id,
                event_name,
            },
        });
        // res.data.data
        //console.log(res);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
