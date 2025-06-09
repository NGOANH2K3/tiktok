import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ViewProfile.module.scss';
import { UserAuth, UserVideo } from '../Store';
import HeaderProfile from './HeaderProfile';
import Items from './items';
import configs from '@/services';

const cx = classNames.bind(styles);

function ViewProfile() {
    const { nickname } = useParams();

    const [videosProfile, setVideosProfile] = useState([]);

    const { profileUser, setProfileUser, listVideos, setListVideos } = UserVideo();
    const { tokenStr } = UserAuth();

    useEffect(() => {
        setVideosProfile(listVideos);
    }, [listVideos]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const data = await configs.user(nickname, tokenStr);

                if (data && typeof data === 'object') {
                    setProfileUser(data);
                    setListVideos(data.videos ?? []); // fallback nếu 'videos' không tồn tại
                } else {
                    setProfileUser({});
                    setListVideos([]);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                setProfileUser({});
                setListVideos([]);
            }
        };

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nickname, tokenStr]);

    if (!profileUser || Object.keys(profileUser).length === 0) {
        return;
    }

    return (
        <div className={cx('wrapper')}>
            <HeaderProfile data={profileUser} />
            <Items data={profileUser} videos={videosProfile} />
        </div>
    );
}

export default ViewProfile;
