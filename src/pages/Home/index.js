import Event from '~/components/Event';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import { getAllEvents } from '~/services/findAllEvents';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Home() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                console.log(sessionStorage.getItem('brand_id'));       
                const events = await getAllEvents(sessionStorage.getItem('brand_id'));
               
                
                setData(events);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    },[]);
   

    return (
        <div className={cx('content')}>
            {
                !data ? (
                        <strong style={{color: "var(--text-color)"}}>No Event Available</strong>) :
                //co the dung Memo cho comp nay chi thay doi khi searchResult thay doi
                Array.isArray(data) &&data.length >1  ? data.map((event, index) => (
                    <Event id={index} data={event}></Event>
                )) : data.length===1 && <Event id={0} data={data[0]}></Event>
                
               // JSON.stringify(data)
            }
        </div>
    );
}

export default Home;
