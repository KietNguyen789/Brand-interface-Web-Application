import styles from './Mask.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Mask({ children }) {
    return (
        <div className={cx('mask')}>
            <div className={cx('bound-top')}></div>
            <div className={cx('Form-box')}>{children}</div>
        </div>
    );
}

export default Mask;
