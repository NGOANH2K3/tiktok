import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('listItem')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/9a56c18766773dc87ad5a4a98d771108~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=c95bd71d&x-expires=1747969200&x-signature=lV2u7niqOIQB0auUG%2FiGQYcJZfM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt="avatar"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>HuuGiang</strong>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Hữu Giang</p>
            </div>
        </div>
    );
}

AccountItems.propTypes = {
    item: PropTypes.string.isRequired,
};

export default AccountItems;
