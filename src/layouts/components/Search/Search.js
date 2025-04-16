import styles from './Search.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import { useEffect, useState, useRef } from 'react';
//import axios from 'axios';
//import * as httpRequest from '~/utils/httpRequest';
import { search } from '~/services/searchService';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef();
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    // clean code
    const debounceValue = useDebounce(searchValue, 500);
    //  tang tai cho may chu
    // => debounceValue
    // value td -> settimeout 500s
    // value td lan 2 -> useState khong set lai init state -> xoa timeout cu -> settimeout 500s -> return chuoi rong
    // neu la '' return
    // 500s sau, debounceValue set gia tri cuoi cung
    // ban request di tim
    useEffect(() => {
        // neu la khoang trang hoac rong thi true
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        // tim ve ket qua tu api
        // lo mang chap chon kq sau cung lai xong truoc thi tra ra kq sai
        // khi ma hoa thi q= ky tu sai se thanh ky tu hop le
        //nhung payload truyen den BE van la ky tu nguoi dung muon tim
        // less tối đa 5 kết quả
        // có hai tham số q và type
        // mã hóa để không vị phạm cú pháp url
        // support api: axios, superagent
        // XMLHttpRequest, fetch
        // require la commonJS, import la ES6
        // async, await = promise
        // request
        //     .get(`users/search`, {
        //         params: {
        //             q: debounceValue,
        //             type: 'less',
        //         },
        //     })
        // nhan promise tu get cua axios
        // await luon nam truoc promise
        const fetchApi = async () => {
            setLoading(true);
            const result = await search(sessionStorage.getItem('brand_id'), debounceValue);
            if (result) {
                setSearchResult(result);
            }
            setLoading(false);
        };

        fetchApi();
    }, [debounceValue]);

    const handleClick = () => {
        // neu muon tai su dun thi tach ham
        setSearchValue('');
        // method cua DOM element
        // tu khoa js co ban
        inputRef.current.focus();
        setSearchResult([]);
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleChange = (event) => {
        const searchValue = event.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    //  console.log(searchResult);
    return (
        // sử dụng div để thẻ cha không ảnh hưởng sự kiện bàn phím của tippy tương tác được
        <div>
            <HeadlessTippy
                interactive
                // để ở trên ghi đè cái sau
                // lỗi do tippy: sự kiến của nó dính sự kiện nổi bọt
                // ảnh hưởng tới ele cha
                // default appendTo parent của react
                // để tương tác được với tippy bằng keyboard

                visible={showResult}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Event</h4>
                            {
                                // co the dung Memo cho comp nay chi thay doi khi searchResult thay doi
                                searchResult === 'No data' || searchValue === '' || searchResult.length === 0 ? <strong className={cx('search-result-content')}>No Data</strong> :
                                    <AccountItem key={searchResult._id} data={searchResult}></AccountItem>

                            }
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and video"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    ></input>

                    {!!searchValue && !loading && (
                        <button
                            onClick={
                                // luon la callback
                                // neu viet la ham thi no se luon goi khi doc qua -> infinite loop
                                handleClick
                            }
                            /* toi uu bang cach tach button ra comp rieng roi dung Memo, useCallBack */
                            className={cx('clear')}
                        >
                            {/* Clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* loading */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    {/* doc props cua typpy tại  */}
                    <HeadlessTippy content="Tìm kiếm">
                        {/* click la an vao roi nhac len, 
                     con mouse down la an vao (tong quat hơn click) */}
                        <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </HeadlessTippy>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
