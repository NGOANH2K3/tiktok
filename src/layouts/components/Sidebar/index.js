import config from '@/config';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeIconActive, FollowIcon, FollowIconActive, LiveIcon, LiveIconActive } from '@/components/Icons';
import SuggestedAccounts from '@/components/SuggestedAccounts';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem
                    title="Follwing"
                    to={config.routes.follwing}
                    icon={<FollowIcon />}
                    activeIcon={<FollowIconActive />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>

            <SuggestedAccounts lable={'Suggestes Accounts'} />
            <SuggestedAccounts lable={'Accounts follow'} />
        </aside>
    );
}

export default Sidebar;
