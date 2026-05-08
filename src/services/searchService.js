import axios from 'axios';
import { MOCK_EVENTS } from './mock/events';

export const search = async (brand_id, event_name) => {
    try {
        const res = await axios.get(`http://localhost:3000/event-manage/event_by_name`, {
            params: { brand_id, event_name },
        });
        return res.data;
    } catch (err) {
        console.log(err);
        return MOCK_EVENTS.filter(e =>
            e.event_name.toLowerCase().includes((event_name ?? '').toLowerCase())
        );
    }
};
