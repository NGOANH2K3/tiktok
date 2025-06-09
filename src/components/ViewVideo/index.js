import { useEffect, useState } from 'react';
import { UserAuth, UserVideo } from '../Store';
import classNames from 'classnames/bind';
import styles from './ViewVideo.module.scss';
import configs from '@/services';
import VideoItem from './VideoItem';

const cx = classNames.bind(styles);
function ViewVideo({ type = '' }) {
    const categories = type;
    const [listVideoUser, setListVideoUser] = useState([]);
    const { listVideoHome, setListVideoHome, setListVideos } = UserVideo();
    const { tokenStr } = UserAuth();

    useEffect(() => {
        setListVideoUser(listVideoHome);
    }, [listVideoHome]);

    useEffect(() => {
        setListVideoUser([]);
        if (type === 'following') {
            const fetchApi = async () => {
                const data = await configs.videos(categories, 2, tokenStr ?? '');
                console.log('API trả về:', data);
                setListVideos(data);
                setListVideoHome(data);
            };

            fetchApi();
        } else {
            const fetchApi = async () => {
                const data = await configs.videos(categories, 3, tokenStr ?? '');
                setListVideos(data);
                setListVideoHome(data);
            };

            fetchApi();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories]);

    if (listVideoUser.length === 0) {
        return <div className={cx('empty')}>Không có video nào.</div>;
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-video')}>
                <VideoItem data={listVideoUser} />
            </div>
        </div>
    );
}

export default ViewVideo;
