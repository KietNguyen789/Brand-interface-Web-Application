import Button from '~/components/Button/Button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function MenuItem({ onClick, data, onLogout }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    const handleClick = () => {
        if (data.title === 'Log out') {
            onLogout();
        } else {
            onClick();
        }
    };
    return (
        <Button className={classes} to={data.to} href={data.href} lefticon={data.icon} onClick={handleClick}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    onClick: PropTypes.func,
    data: PropTypes.object.isRequired,
};
export default MenuItem;
