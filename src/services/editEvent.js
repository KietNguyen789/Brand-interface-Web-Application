import axios from 'axios';

export const EditEvent = async (brand_id,event_id, event_name, voucher_quantity,voucher_condition= {
    "shoe": 4,
    "book": 10,
    "coin": 2
}, description='no description', start_date, end_date) => {
    try {
       
         const res = await axios({
            method: 'patch',
            url: `http://localhost:3000/brand-manage/event-edit`,   
            params:{
                brand_id
            },
            headers: 'Content-Type: application/json',
       
        data: {
            event_id,
            event_name,
            voucher_quantity,
            start_date,
            end_date}
        });
      
        const data = res.data;
       // console.log('event list :',data);
        return data;
    } catch (err) {
        console.log(err);
    }
};
