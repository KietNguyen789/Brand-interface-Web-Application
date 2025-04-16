import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoins,
    faEarthAsia,
    faGear,
    faKeyboard,
    faPlus,
    faQuestionCircle,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Menu from '~/components/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CreateEvent from '../CreateEvent';
const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
            title: 'English',
            children: {
                title: 'Language13',
                data: [
                    {
                        type: 'Language',
                        code: 'en',
                        title: 'english',
                    },
                    {
                        type: 'Language',
                        code: 'vi',
                        title: 'vietnamese',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>,
            title: 'Feedback and Help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
            title: 'Keyboard shortcuts',
        },
    ];
    // handle logic when user chose item in menu
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                // Handle change Language
                break;
            default:
                break;
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },

        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/Settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            href: 'http://localhost:5173/signin',
            separate: true,
        },
    ];

    const numbermessage = 12;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo 
                        0. tro vao logo
                        1. copy outer HTML
                        2. copy sympol -> copy outer HTML*/}

                {/* <Link to={config.routes.home} className={cx('logo-link')}>
                            {' '}
                            <Image src={images.logo} className={cx('logo')}></Image>
                        </Link> */}

                <CreateEvent />
                {/* search 
                        spellcheck check chinh ta*/}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badage')}>{numbermessage}</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button rounded className={cx('custom-login')}>
                                Upload
                            </Button>
                            <Button primary>Log In</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        className={cx('menu')}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image src="/assets/images/NoImage.png" className={cx('user-avatar')} />
                        ) : (
                            <i className={cx('more-button')}>
                                <svg
                                    className={cx('more-logo')}
                                    width="1em"
                                    data-e2e=""
                                    height="1em"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z"
                                    ></path>
                                </svg>
                            </i>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
