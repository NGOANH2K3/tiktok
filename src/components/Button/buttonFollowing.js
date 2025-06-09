import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

import Button from '.';
import { UserAuth } from '../Store';
import { FlowIcon, PlusIcon } from '../Icons';

const cx = classNames.bind(styles);

function ButtonFollow({ onClick = () => {}, className, isFollowed }) {
    const { tokenStr, userAuth } = UserAuth();

    return (
        <div className={cx('container-btn')}>
            {!tokenStr && !userAuth ? (
                <Button onClick={onClick} outline>
                    <PlusIcon />
                </Button>
            ) : (
                <Button className={cx(className)} onClick={onClick} outline>
                    {isFollowed ? <FlowIcon /> : <PlusIcon />}
                </Button>
            )}
        </div>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    isFollowed: PropTypes.bool,
};

export default ButtonFollow;
