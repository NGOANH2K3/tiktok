import config from '@/config';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeIconActive, FollowIcon, FollowIconActive, LiveIcon, LiveIconActive } from '@/components/Icons';
import FooterSidebar from './FooterSidebar';
import { useRef } from 'react';
import { UserAuth } from '@/components/Store';
import SuggestedLogin from '@/components/SuggestedLogin';
import Suggest from '@/components/SuggestedAccounts/Suggest';
import FollowingAccounts from '@/components/SuggestedAccounts/Following';
const cx = classNames.bind(styles);
function Sidebar() {
    const sidebarRef = useRef(null);

    const { userAuth, tokenStr } = UserAuth();
    return (
        <div>
            <div ref={sidebarRef} className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        title="For you"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeIconActive />}
                    />
                    <MenuItem
                        title="Follwing"
                        to={config.routes.follwing}
                        icon={<FollowIcon />}
                        activeIcon={<FollowIconActive />}
                    />
                    <MenuItem
                        title="Live"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveIconActive />}
                    />
                </Menu>

                {userAuth && tokenStr ? (
                    <div>
                        <Suggest headingTitle="Suggested accounts" footerTitle="See all" />
                        <FollowingAccounts headingTitle="Following accounts" footerTitle="See all" />
                    </div>
                ) : (
                    <SuggestedLogin />
                )}

                <FooterSidebar />
            </div>
        </div>
    );
}

export default Sidebar;
