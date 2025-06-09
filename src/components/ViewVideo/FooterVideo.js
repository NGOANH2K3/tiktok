import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ViewVideo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Footer({ data = {} }) {
    return (
        <header className={cx('footer-video')}>
            <div className={cx('infor')}>
                <div className={cx('name')}>
                    <Link to={`/@${data.user?.nickname}`} className={cx('nickname')}>
                        {data.user?.nickname}
                    </Link>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </div>
                <div className={cx('content')}>
                    <p className={cx('text-content')}>{data.description}</p>
                </div>
                <div className={cx('music')}>
                    <span className={cx('name-music')}>{data.music}</span>
                </div>
            </div>
        </header>
    );
}

Footer.propTypes = {
    data: PropTypes.object,
};

export default Footer;
