import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountPreview from './AccountPreview';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import LoadingElement from '../LoadingElement';
import Image from '@/components/Image';
const cx = classNames.bind(styles);
function AccountItems({ value = {}, isLoading = false, isPreview = false }) {
    const renderPreview = (prop) => {
        return (
            <div tabIndex="-1" {...prop}>
                {isPreview && (
                    <PopperWrapper>
                        <AccountPreview data={value} />
                    </PopperWrapper>
                )}
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <Link to={`/@${value.nickname}`} className={cx('listItem')}>
                    {!isLoading ? (
                        <Fragment>
                            <Image className={cx('avatar')} src={value.avatar} alt={value.nickname} />
                            <div className={cx('item-info')}>
                                <p className={cx('nickname')}>
                                    <strong>{value.nickname}</strong>
                                    <span className={cx('icon')}>
                                        {value.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                                    </span>
                                </p>
                                <p className={cx('name')}>{`${value.first_name} ${value.last_name}`}</p>
                            </div>
                        </Fragment>
                    ) : (
                        <div className={cx('loading-container')}>
                            <LoadingElement className={cx('loading-avatar')} />
                            <div className={cx('loading-info')}>
                                <LoadingElement className={cx('loading-nickname')} />
                                <LoadingElement className={cx('loading-username')} />
                            </div>
                        </div>
                    )}
                </Link>
            </Tippy>
        </div>
    );
}

AccountItems.propTypes = {
    item: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    isPreview: PropTypes.bool,
};

export default AccountItems;
