import * as httpRequest from '~/utils/httpRequest';
import axios from 'axios';
export const getAllVouchers = async () => {
    try {
        // luon thuc hien await tu tren xuong duoi truoc
         const res = await axios({
            method: 'get',
            url: `http://localhost:3000/voucher-manage/all-voucher`,   
          });
        // res.data.data
        const data = res.data;
        console.log('voucher list :',data);
        return data;
    } catch (err) {
        console.log(err);
    }
};
