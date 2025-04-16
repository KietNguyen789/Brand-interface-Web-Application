import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import classNames from 'classnames/bind';
import styles from './Budget.scss';
import { statisticBudget } from '~/services/BudgetStatistic';

const cx = classNames.bind(styles);

function Budget() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res_data = await statisticBudget(sessionStorage.getItem('brand_id'));
                
                // Chuyển đổi dữ liệu từ đối tượng thành mảng
                const formattedData = Object.entries(res_data).map(([monthYear, budget]) => ({
                    name: monthYear,
                    value: Math.floor(Math.random() * 100000000)
                }));

                setData(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);
    const formattedData = [
        { name: 'Tháng 1', value: 12000000 },
        { name: 'Tháng 2', value: 20000000 },
        { name: 'Tháng 3', value: 15000000 },
        { name: 'Tháng 4', value: 94000000 }
      ];
      console.log(data);
      
    return (
        <div className={cx('Budget-container')}>
            <h2 className={cx('title')}>Biểu Đồ Thống Kê Ngân Sách Qua Các Tháng (Đơn Vị: Triệu Đồng)</h2>
            <BarChart className={cx('Chart')} width={700} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" label={{ value: 'Năm-Tháng', position: 'bottom' }} />
                <YAxis label={{ value: 'Ngân Sách (Triệu Đồng)', angle: -90, position: 'left' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#333" />
            </BarChart>
        </div>
    );
}

export default Budget;
