import image from '@/assets/images';
import Button from '@/components/Button';
import { InboxIcon, MessageIcon } from '@/components/Icons';
import Image from '@/components/Image';
import Menu from '@/components/Popper/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPassport,
    faPlus,
    faSignIn,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import Search from '../Search';
import { Link, useNavigate } from 'react-router-dom';
import config from '@/config';
import { UserAuth } from '@/components/Store';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faPassport} />,
        title: 'language',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'العربية',
                    title: 'العربية',
                },
                {
                    type: 'language',
                    code: 'বাঙ্গালি (ভারত)',
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    type: 'language',
                    code: 'Cebuano (Pilipinas)',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    type: 'language',
                    code: 'Čeština (Česká republika)',
                    title: 'Čeština (Česká republika)',
                },
                {
                    type: 'language',
                    code: 'Deutsch',
                    title: 'Deutsch',
                },
                {
                    type: 'language',
                    code: 'Ελληνικά (Ελλάδα)',
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    type: 'language',
                    code: 'Español',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'Suomi (Suomi)',
                    title: 'Suomi (Suomi)',
                },
                {
                    type: 'language',
                    code: 'Filipino (Pilipinas)',
                    title: 'Filipino (Pilipinas)',
                },
                {
                    type: 'language',
                    code: 'Français',
                    title: 'Français',
                },
                {
                    type: 'language',
                    code: 'עברית (ישראל)',
                    title: 'עברית (ישראל)',
                },
                {
                    type: 'language',
                    code: 'हिंदी',
                    title: 'हिंदी',
                },
                {
                    type: 'language',
                    code: 'Magyar (Magyarország)',
                    title: 'Magyar (Magyarország)',
                },
                {
                    type: 'language',
                    code: '简体中文',
                    title: '简体中文',
                },
                {
                    type: 'language',
                    code: 'Italiano (Italia)',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: '日本語（日本）',
                    title: '日本語（日本）',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedbank',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const navigate = useNavigate();

    const { userAuth, tokenStr, setOpenFormLogin } = UserAuth();
    //handle logig
    const handleFormLogin = () => {
        tokenStr && userAuth ? navigate('/upload') : setOpenFormLogin(true);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: `/@${userAuth.nickname}`,
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Tiktok coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log uot',
            separate: true,
            component: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={image.logo} alt="logo"></img>
                </Link>
                <Search />
                <div className={cx('actions')}>
                    <Button
                        onClick={handleFormLogin}
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                        className={cx('btn-upload')}
                        outline
                    >
                        Upload
                    </Button>
                    {userAuth && tokenStr ? (
                        <>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleFormLogin} primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Login
                            </Button>
                        </>
                    )}
                    <Menu items={userAuth && tokenStr ? userMenu : MENU_ITEMS}>
                        {userAuth && tokenStr ? (
                            <Link to={`/@${userAuth.nickname}`} className={cx('avatar-user')}>
                                <Image
                                    className={cx('avatar')}
                                    src={userAuth.avatar}
                                    alt={userAuth.first_name + ' ' + userAuth.last_name}
                                />
                            </Link>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
