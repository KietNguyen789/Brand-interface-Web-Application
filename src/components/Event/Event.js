import styles from './Event.module.scss';
import classNames from 'classnames/bind';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDateTime } from '../FormatDate';
const cx = classNames.bind(styles);

function Event({ id, data }) {
    //const navigate = useNavigate();
   // navigate(`/@${id}`, { state: { id: id, ...data } });
    // const newdata = { id, ...data };
   const newdata = { id: id, ...data };
   console.log('id in Event Comp: ',data._id);
   
    return (
        <Link to={`/@${id}`} state={newdata} className={cx('wrapper')}>
            <img className={cx('image')} src={data.event_image} alt={data.event_name}></img>
            <div className={cx('info')}>
            <h4 className={cx('title')}>
                    <span>{data.event_name}</span>
                    {/* {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />} */}
                </h4>
                <span className={cx('vouchers')}>
                    <strong>Number Voucher</strong>
                    <p>{data.voucher_quantity}</p>
                </span>
                <span className={cx('start')}>
                    {' '}
                    <strong>Start</strong>
                    <p>{formatDateTime(data.start_date)}</p>
                </span>
                <span className={cx('end')}>
                    {' '}
                    <strong>End</strong>
                    <p>{formatDateTime(data.end_date)}</p>
                </span>
            </div>
        </Link>
    );
}
// .node: bat cu kieu gi ma render duoc
// kieu khong render duowc co the la func
// dung cho class children
Event.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Event;
