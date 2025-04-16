import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './AccountPreview.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountPreview({ props }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/99095e17a41c7bb3ea3bd5cb262b0938.jpeg?lk3s=a5d48078&nonce=80437&refresh_token=80644e1369051c5147daf967ea0e2a3c&x-expires=1724385600&x-signature=JuH9hg2vgdpMlC334l%2B0EjgnMzM%3D&shp=a5d48078&shcp=81f88b70"
                    className={cx('avatar')}
                    alt=""
                ></img>
                <div>
                    <Button primary classNames={cx('FollowBtn')}>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    {/* optimize ve sale, gg uu tien h tag */}
                    Sun_4228
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>Sun</p>
                <p className={cx('analytic')}>
                    <strong className={cx('value')}>0.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>0.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
