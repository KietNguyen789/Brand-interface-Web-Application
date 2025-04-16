import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './SubHeader.scss';
import { useReducer, useState, useEffect, useRef } from 'react';
import { faGamepad, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Record from '~/components/Record';
import axios from 'axios';
import * as httpRequest from '~/utils/httpRequest';
import { findgames } from '~/services/findAllGame';
import { getAllVouchers } from '~/services/getAllVoucher';
import { getAllGames } from '~/services/findAllGame';
import { savesub } from '~/services/saveVoucherForEvent';
// import { type } from '@testing-library/user-event/dist/type';
// import reducer, { initState } from './Todo/reducer';
// import { setJob, addJob, deleteJob } from './Todo/actions';
// import logger from './Todo/logger';
const cx = classNames.bind(styles);
function SubHeader({ id }) {
    //id, images, info, description
    const [activeIndex, setActiveIndex] = useState(null);
    const [clickIndex, setClickIndex] = useState(null);
    const menuItemsRef = useRef([]);
    const bottomLineRef = useRef(null);
    const [counts, setCounts] = useState({});
    //const [count, setCount] = useState(0);
    useEffect(() => {
        if (activeIndex !== null && menuItemsRef.current[activeIndex]) {
            const { offsetLeft, offsetWidth } = menuItemsRef.current[activeIndex];
            bottomLineRef.current.style.transform = `translateX(${offsetLeft}px)`;
            bottomLineRef.current.style.width = `${offsetWidth}px`;
        }
    }, [activeIndex]);
    const handleMouseOver = (index) => {
        setActiveIndex(index);
    };
    const handleClick = (index) => {
        setClickIndex(index);
    };
    const formatDate = (date) => date.toISOString().split('T')[0];
// useEffect(()=>{
//     axios
//     .get('https://localhost:3000/gameManage/getAll')
//     .then((res)=>{
//         console.log(res);
        
//     })
//     .catch(()=>{

//     })
// },[])
    const listGame = [
        {
            name: 'Lac xi ngau',
            image: 'https://7aothuat.com/wp-content/uploads/2019/12/hu-lac-xi-ngau-da-1.jpg',
            type: 'random',
            CanExchange: 1,
            description: 'Ban co the lac dien thoai...',
        },
        {
            name: 'Quiz',
            image: 'https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg?w=826',
            type: 'Knowledge',
            CanExchange: 0,
            description: 'Ban can tra loi dung de nhan thuong...',
        },
    ];
    
    const [voucher,setVoucher] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const vouchers = await getAllVouchers();
                setVoucher(vouchers);
                
                
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    },[]);
    console.log('list voucher:',voucher);
    const [game,setGame] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const games = await getAllGames();
                setGame(games);
                console.log(games);
                
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    },[]);
    const updateCount = (itemId, delta) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [itemId]: Math.max((prevCounts[itemId] || 0) + delta, 0),
        }));
    };
    const updateInputCount = (itemId, value) => {
        const numberValue = parseInt(value, 10);
        setCounts((prevCounts) => ({
            ...prevCounts,
            [itemId]: isNaN(numberValue) ? 0 : numberValue,
        }));
    };
    const handlePlus = (itemId) => {
        updateCount(itemId, 1);
    };

    const handleMinus = (itemId) => {
        updateCount(itemId, -1);
    };
    const handleChangeInputRecord = (itemId, value) => {
        updateInputCount(itemId, value);
    };
    const handlesavechosesub = async ()=>{
        for(const key in counts)
        { let index = 0;
            if (counts.hasOwnProperty(key) ) {  // Kiểm tra xem key có phải là của đối tượng hiện tại không (không phải từ prototype chain)
               if(counts[key] > 0)
                {
                    console.log('info: ',id,voucher[index].qr_code,counts[key],voucher[index].description, voucher[index].expiration_date, voucher[index].status);
                    console.log('info: ',typeof id,typeof voucher[index].qr_code,typeof  Number(counts[key]),typeof voucher[index].description,typeof  voucher[index].expiration_date,typeof  voucher[index].status);
                    await savesub(id,voucher[index].qr_code,Number(counts[key]),voucher[index].description, voucher[index].expiration_date, voucher[index].status )}
              }
           index= index+1;
        }
    }
    return (
        <div className="wrapper-sub-header">
            <div className="sub-menu">
                {['Game For', 'Voucher For'].map((title, index) => (
                    <div
                        key={index}
                        ref={(el) => (menuItemsRef.current[index] = el)}
                        className="menu-item"
                        onMouseOver={() => handleMouseOver(index)}
                        onClick={() => handleClick(index)}
                    >
                        {title}
                    </div>
                ))}
                <div className={cx('bottom-line')} ref={bottomLineRef}></div>
            </div>

            <div className={cx('sub-menu-content')}>
                {clickIndex === 0 || clickIndex === null ? (
                    <div className={cx('game')}>
                        {game.map((game, index) => (
                            <div className={cx('sub-menu-item')}>
                                <Record key={index} id={index} data={game} type={'game'} />
                                <input type="checkbox" className={cx('game-item-input')} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={cx('voucher')}>
                        {voucher.map((voucher, index) => (
                            <div className={cx('sub-menu-item')}>
                                <Record key={index} id={index} data={voucher} type={'voucher'} />
                                <button onClick={() => handlePlus(voucher.voucher_code)} primary className={cx('item-btn')}>
                                    +
                                </button>
                                <input
                                    onChange={(e) => handleChangeInputRecord(voucher.voucher_code, e.target.value)}
                                    className={cx('item-input')}
                                    value={counts[voucher.voucher_code] || 0}
                                />
                                <button onClick={() => handleMinus(voucher.voucher_code)} primary className={cx('item-btn')}>
                                    -
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <br/>
            <Button primary small onClick={handlesavechosesub}>End Chose Voucher & Game</Button>
        </div>
    );
}

export default SubHeader;
