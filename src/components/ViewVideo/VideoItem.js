import classNames from 'classnames/bind';

import styles from './ViewVideo.module.scss';
import Video from './Video';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from './FooterVideo';
import VideoActions from './Video/VideoAction';

const cx = classNames.bind(styles);

function VideoItem({ data = [] }) {
    const wrapperRef = useRef();

    const [followStatus, setFollowStatus] = useState(data.filter((i) => i.user.is_followed).map((i) => i.user.id));
    const [isLike, setIsLike] = useState(data.filter((i) => i.is_liked).map((i) => i.id));
    return (
        <div className={cx('wrapper-item')}>
            <div ref={wrapperRef} className={cx('container')}>
                {data.map((items, index) => (
                    <div key={items.id} className={cx('conten')}>
                        <div className={cx('video-items')}>
                            <Video data={items} index={index} />
                        </div>
                        <Footer data={items} />

                        <div className={cx('action')}>
                            <VideoActions
                                data={items}
                                index={index}
                                isFollow={followStatus.includes(items?.user?.id)}
                                setFollowStatus={setFollowStatus}
                                isLike={isLike.includes(items?.id)}
                                setLikeStatus={setIsLike}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

VideoItem.propTypes = {
    data: PropTypes.array.isRequired,
};

export default VideoItem;
