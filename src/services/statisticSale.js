import axios from 'axios';
import { MOCK_SALEOFF_URL } from './mock/saleoff';

export const staSaleOff = async (brandId) => {
    try {
        const res = await axios({
            method: 'get',
            url: `http://localhost:3000/monitor/discountStatus`,
            params: { brandId },
        });
        return res.data;
    } catch (e) {
        console.log(e);
        return MOCK_SALEOFF_URL;
    }
};
