import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../Image';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccoutItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('account')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.last_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname} </span>
            </div>
        </Link>
    );
}

AccoutItem.prototype = {
    data: PropTypes.object.isRequired,
};

export default AccoutItem;
