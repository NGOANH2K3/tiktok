import classNames from 'classnames/bind';
import styles from './LoadingElement.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function LoadingElement({ className, width, height, borderRadius }) {
    return (
        <div
            className={cx('load', { [className]: true })}
            style={{ width: width, height: height, borderRadius: borderRadius }}
        ></div>
    );
}

LoadingElement.prototype = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    borderRadius: PropTypes.string,
};

export default LoadingElement;
