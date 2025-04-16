import styles from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
    return <div className={cx('footer')}></div>;
}

export default Footer;
