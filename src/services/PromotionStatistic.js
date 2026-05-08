import axios from 'axios';
import { MOCK_EVENTS } from './mock/events';

export const getcharPromotion = async () => {
    try {
        const res = await axios({
            method: 'get',
            url: `http://localhost:3000/event-manage/all-event`,
        });
        return res.data;
    } catch (err) {
        console.log(err);
        return MOCK_EVENTS;
    }
};
