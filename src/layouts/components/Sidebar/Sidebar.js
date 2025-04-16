import config from '~/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
    UserGroupIcon,
    UserGroupActiveIcon,
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import { useRef } from 'react';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGamepad,
    faHandHoldingDollar,
    faPercentage,
    faRightFromBracket,
    faTag,
    faTicket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
const cx = classNames.bind(styles);
// neu menu trong sidebar dung chung trong layout thi dua ra component trong layout
// dung chung cho src dua vao component cua src
function Sidebar() {
    const Item = useRef();

    return (
        <aside className={styles.wrapper}>
            <Menu>
                <MenuItem
                    title="Budget Statistics"
                    to={config.routes.budget}
                    icon={<FontAwesomeIcon icon={faHandHoldingDollar} />}
                    // activeIcon={}
                ></MenuItem>
                <MenuItem
                    title="Promotion Status Statistics"
                    to={config.routes.saleoffstate}
                    icon={<FontAwesomeIcon icon={faTag} />}
                    // activeIcon={<UserGroupActiveIcon></UserGroupActiveIcon>}
                ></MenuItem>
            </Menu>
            <MenuItem
                title="Home"
                to={config.routes.home}
                icon={<FontAwesomeIcon icon={faRightFromBracket} />}
                //activeIcon={<LiveActiveIcon />}
            ></MenuItem>
            {/* <SuggestedAccounts label="Suggested for you" /> */}
            {/* <SuggestedAccounts label="Following accounts" /> */}
        </aside>
    );
}

export default Sidebar;
