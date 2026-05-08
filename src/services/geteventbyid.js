import axios from 'axios';
import { MOCK_EVENTS } from './mock/events';

export const getEventById = async (id) => {
    try {
        const res = await axios({
            method: 'get',
            url: `http://localhost:3000/event-manage/event_id`,
            params: { id },
        });
        return res.data;
    } catch (err) {
        console.log(err);
        return MOCK_EVENTS.find(e => e._id === id) ?? MOCK_EVENTS[0];
    }
};
