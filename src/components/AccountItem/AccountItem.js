import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { formatDateTime } from '../FormatDate';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        data && <Link to={`/@${data._id}`} state={data} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.event_image} alt={data.event_name}></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.event_name}</span>

                </h4>
                <span className={cx('enddate')}>{formatDateTime(data.end_date)}</span>
            </div>
        </Link>
    );
}
// .node: bat cu kieu gi ma render duoc
// kieu khong render duowc co the la func
// dung cho class children


export default AccountItem;
