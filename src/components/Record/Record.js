import styles from './Record.module.scss';
import classNames from 'classnames/bind';
import { formatDateTime } from '../FormatDate';
const cx = classNames.bind(styles);

function Record({ id, data, type }) {
    const images = (type) => {
        return (
            <>
                {type === 'game' ? (
                   <>
                        <strong className={cx('image-item-name')}>{data.name}</strong>
                        <img className={cx('image-item')} src={data.qr_code} alt="no img"></img>
                   </>
                ) : (
                    <img className={cx('image-item')} src={data.qr_code} alt="No QR"></img>
                )}
                
            </>
        );
    };
    const info = (type) => {
        return (
            <>
                {type === 'game' ? (
                    <>
                        <p className={cx('info-item')}>Type - {data.type}</p>
                        <p className={cx('info-item')}>Allow Exchange - {data.CanExchange}</p>
                    </>
                ) : (
                    <>
                        <p className={cx('info-item')}>Code - {data.voucher_code}</p>
                        <p className={cx('info-item')}>Value - {data.value}</p>
                        <p className={cx('info-item')}>EndDate - {formatDateTime(data.expiration_date)}</p>
                        <p className={cx('info-item')}>State - {data.status}</p>
                    </>
                )}
            </>
        );
    };

    const description = <p>Mo ta - {data.description}</p>;
    return (
        <div className={cx('wrapper-record')}>
            <div className={cx('record-image')}>{images(type)}</div>
            <div className={cx('record-info')}>{info(type)}</div>
            <div className={cx('record-description')}>{description}</div>
        </div>
    );
}
// .node: bat cu kieu gi ma render duoc
// kieu khong render duowc co the la func
// dung cho class children

export default Record;
