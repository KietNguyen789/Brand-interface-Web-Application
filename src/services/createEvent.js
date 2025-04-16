//import * as httpRequest from '~/utils/httpRequest';
import axios from 'axios';
export const createEvent = async (brand_id,
    event_name,
    event_image,
    voucher_quantity,
    
        shoe,
        book,
        coin,
    
    budget,
    start_date,
    end_date) => {
    try {
     
        const voucher_condition = {
            shoe,
            book,
            coin
        }
        const res = await axios({
            method: 'post',
            url: `http://localhost:3000/brand-manage/event-register`,   
            headers: {
                'Content-Type': 'application/json',
            },
            data:{
                brand_id,
                event_name,
                event_image,
                voucher_quantity,
                voucher_condition,
                budget,
                start_date,
                end_date
            }
        });
        // res.data.data
        const data = res.data;
        console.log('Create event :',data);
        return data;
    } catch (err) {
        console.log(err);
    }
};
