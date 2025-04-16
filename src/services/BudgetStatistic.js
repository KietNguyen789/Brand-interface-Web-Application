import { getAllEvents } from './findAllEvents';
import dayjs from 'dayjs'; // Sử dụng thư viện dayjs để xử lý ngày tháng dễ dàng

export const statisticBudget = async () => {
    try {
        // Lấy danh sách sự kiện
        const events = await getAllEvents(sessionStorage.getItem('brand_id'));

        // Tạo một đối tượng để lưu tổng ngân sách theo tháng
        const budgetByMonth = {};
//console.log('events',events);

        // Duyệt qua danh sách sự kiện
        events.forEach(event => {
           // console.log('event',event);
            
            const budget = event.budget;
            const start_date = event.start_date;

            // Chuyển đổi start_date thành đối tượng ngày tháng
            const monthYear = dayjs(start_date).format('YYYY-MM'); // Format theo năm-tháng

            // Cập nhật tổng ngân sách cho tháng
            if (budgetByMonth[monthYear]) {
                budgetByMonth[monthYear] += budget;
            } else {
                budgetByMonth[monthYear] = budget;
            }
        });

        // Trả về đối tượng chứa tổng ngân sách theo tháng
        console.log('data budget', budgetByMonth);
        
        return budgetByMonth;
    } catch (err) {
        console.error('Error fetching data:', err);
    }
};
