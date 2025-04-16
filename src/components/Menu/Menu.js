import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
//
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ className, items, children, onChange = defaultFn, hideOnClick = false }) {
    // useCallBack, useMemo khi co nhieu state de tranh render nhung thang khong phu thuoc
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const navigate = useNavigate();
    const renderItem = () => {
        // thu tu tham so phai dung (item, index)
        return current.data.map((item, index) => {
            const isParent = !!item.children;
           
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={
                        // toi cap tiep theo
                        () => {
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                            } else {
                                onChange(item);
                            }
                           
                        }
                    }
                    onLogout={()=>{
                        if(item.title ==='Log out')
                            {
                                sessionStorage.removeItem('token');
                                sessionStorage.removeItem('endat');
                                //sessionStorage.removeItem('brand_id');

                                //navigate('/signin', {replace: true});
                            }
                    }
                    }
                />
            );
        });
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const renderResult = (attrs) => (
        <div className={cx('menu-list', className)} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack}></Header>}
                <div className={cx('menu-body')}> {renderItem()}</div>
            </PopperWrapper>
        </div>
);
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        // Tippy khong dung react Memo
        <Tippy
            //visible={true}

            offset={[12, 8]}
            delay={[0, 500]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            interactive
            render={renderResult}
            onHide={
                // hover ra ngoai thi ve trang 1
                handleResetMenu
            }
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;
