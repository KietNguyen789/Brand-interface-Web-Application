import axios from 'axios';
import { MOCK_EVENTS } from './mock/events';

export const getAllEvents = async (id) => {
    try {
        const res = await axios({
            method: 'get',
            url: `http://localhost:3000/brand-manage/brandId`,
            params: { id },
        });
        const array_eids = Object.values(res.data?.event_ids ?? []);
        const params = new URLSearchParams();
        params.append('ids', JSON.stringify(array_eids));
        const events = await axios.get(`http://localhost:3000/event-manage/event_ids`, { params });
        return events.data ?? [];
    } catch (err) {
        console.log(err);
        return MOCK_EVENTS;
    }
};
