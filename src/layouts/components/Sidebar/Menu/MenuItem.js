import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
const cx = classNames.bind(style);
function MenuItem({ icon, to, title, activeIcon }) {
    return (
        <NavLink className={(nav) => cx('menuItem', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('iconActive')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.prototype = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
