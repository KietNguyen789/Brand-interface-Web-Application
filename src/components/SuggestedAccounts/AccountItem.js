import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem({ data, nickname }) {
    const renderbox = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy offset={[-20, 0]} interactive delay={[800, 0]} render={renderbox} placement="bottom">
                <Link to={`/@${'Sun_4228'}`} className={cx('account-item', 'separate')}>
                    <div className={cx('container-avatar')}>
                        <img
                            className={cx('avatar')}
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/99095e17a41c7bb3ea3bd5cb262b0938.jpeg?lk3s=a5d48078&nonce=80437&refresh_token=80644e1369051c5147daf967ea0e2a3c&x-expires=1724385600&x-signature=JuH9hg2vgdpMlC334l%2B0EjgnMzM%3D&shp=a5d48078&shcp=81f88b70"
                            alt=""
                        ></img>
                    </div>
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            {/* optimize ve sale, gg uu tien h tag */}
                            Sun_4228
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <p className={cx('name')}>Sun</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    name: PropTypes.string,
    nickname: PropTypes.string.isRequired,
};
export default AccountItem;
