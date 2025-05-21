import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItems from './AccountItems';

const cx = classNames.bind(styles);
function SuggestedAccounts({ lable }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('lable')}>{lable}</h2>
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <p className={cx('more')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    lable: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
