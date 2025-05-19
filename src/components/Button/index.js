import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    onClick,
    primary = false,
    outline = false,
    text = false,
    disable = false,
    small = false,
    large = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    children,
    ...passProps
}) {
    let Comp = 'button';
    const prop = {
        onClick,
        ...passProps,
    };

    // remote event clink
    if (disable) {
        Object.keys(prop).forEach((key) => {
            if (key.startsWith('on') && typeof [key] === 'function') {
                delete prop[key];
            }
        });
    }

    if (to) {
        prop.to = to;
        Comp = Link;
    } else if (href) {
        prop.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
        [className]: className,
    });
    return (
        <Comp className={classes} {...prop}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
};

export default Button;
