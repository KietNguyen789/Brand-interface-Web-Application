import axios from 'axios';
import { MOCK_VOUCHERS } from './mock/vouchers';

export const getAllVouchers = async () => {
    try {
        const res = await axios({
            method: 'get',
            url: `http://localhost:3000/voucher-manage/all-voucher`,
        });
        return res.data;
    } catch (err) {
        console.log(err);
        return MOCK_VOUCHERS;
    }
};
