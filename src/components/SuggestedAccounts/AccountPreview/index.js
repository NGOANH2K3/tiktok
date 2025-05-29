import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '@/components/Image';
import { UserAuth } from '@/components/Store';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function AccountPreview({ data = {} }) {
    const { userAuth } = UserAuth();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link to={`/@${data.nickname}`}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                </Link>
                {userAuth.id !== data?.id && (
                    <Button small primary className={cx('btn-follow')}>
                        {data?.is_followed ? 'Following' : 'Follow'}
                    </Button>
                )}
            </div>
            <div className={cx('body')}>
                <Link to={`/@${data.nickname}`} className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    <span className={cx('icon')}>{data.tick && <FontAwesomeIcon icon={faCheckCircle} />}</span>
                </Link>
                <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.followers_count}</strong>
                    <span className={cx('lable')}>Follwing </span>
                    <strong className={cx('value')}>{data.likes_count}</strong>
                    <span className={cx('lable')}>Like</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
