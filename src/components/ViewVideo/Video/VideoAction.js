import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';

import { CommentIcon, FavouriteIcon, LoveIcon, ShareIcon, Like } from '@/components/Icons';
import { UserAuth, UserNotify, UserVideo } from '../../Store';
import Button from '../../Button';
import { useEffect, useState } from 'react';
import configs from '@/services';
import ButtonFollow from '@/components/Button/buttonFollowing';
import Image from '@/components/Image';
const cx = classNames.bind(styles);

function VideoActions({
    data = {},
    index,
    isFollow = false,
    isLike = false,
    setFollowStatus = () => {},
    setLikeStatus = () => {},
}) {
    const { setOpenFullVideo } = UserAuth();
    const { setPositionVideo } = UserVideo();
    const { tokenStr, userAuth, setOpenFormLogin } = UserAuth();
    const [isLiked, setIsLiked] = useState(isLike);
    const [coutLiked, setCountLiked] = useState();
    const { setInfoNotify } = UserNotify();
    const [followUser, setFollowUser] = useState(isFollow);
    const handleOpenFormFullVideo = () => {
        setOpenFullVideo(true);
        setPositionVideo(index);
    };

    useEffect(() => {
        setFollowUser(isFollow);
    }, [isFollow]);

    //
    // useEffect(() => {
    //     setIsLiked(isLike);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isLike]);

    useEffect(() => {
        if (data?.is_liked) {
            setIsLiked(true);
        }
        setCountLiked(data?.likes_count);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setLikeVideo = async (id) => {
        const result = await configs.LikeVideoService(id, tokenStr);
        setIsLiked(true);
        setCountLiked(coutLiked + 1);
        console.log('Liked result: ', result);
    };

    const setUnLikeVideo = async (id) => {
        const result = await configs.UnLikeVideoService(id, tokenStr);
        setIsLiked(false);
        setCountLiked(coutLiked - 1);
        console.log('Unliked result: ', result);
    };

    const handleOpenFormLogin = () => {
        setOpenFormLogin(true);
    };

    const handleToggleFollow = async (userId) => {
        if (followUser) {
            handleUnFollow(userId);
        } else {
            handleFollow(userId);
        }
    };

    const handleFollow = async (userId) => {
        const res = await configs.followUser(userId, tokenStr);

        if (res.Error) {
            setInfoNotify({
                content: "Can't follow this user!",
                delay: 3000,
                isNotify: true,
            });
        } else {
            setFollowUser(true);

            setFollowStatus((prev) => [...prev, userId]);
        }
    };

    const handleUnFollow = async (userId) => {
        const res = await configs.unFollowUser(userId, tokenStr);

        if (res.Error) {
            setInfoNotify({
                content: "Can't unfollow this user!",
                delay: 3000,
                isNotify: true,
            });
        } else {
            setFollowUser(false);

            setFollowStatus((prev) => prev.filter((i) => i !== userId));
        }
    };
    return (
        <div className={cx('container-actions')}>
            <div className={cx('action-item')}>
                <Button className={cx('btn-avatar')}>
                    <Image className={cx('avatar')} src={data?.user?.avatar} alt={data?.user?.last_name} />
                </Button>
                <ButtonFollow
                    className={cx(isFollow ? 'btn-unfollow' : 'btn-follow')}
                    onClick={() => (tokenStr && userAuth ? handleToggleFollow(data?.user?.id) : handleOpenFormLogin())}
                    isFollowed={isFollow}
                />
            </div>

            <div className={cx('actions-item')}>
                <Button className={cx('btn-action')}>
                    {!isLiked && (
                        <span className={cx('cover-icon')} onClick={() => setLikeVideo(data.id)}>
                            <LoveIcon />
                        </span>
                    )}
                    {isLiked && (
                        <span className={cx('cover-icon')} onClick={() => setUnLikeVideo(data.id)}>
                            <Like />
                        </span>
                    )}
                </Button>
                <p className={cx('info-count')}>{coutLiked}</p>
            </div>
            <div className={cx('actions-item')}>
                <Button onClick={handleOpenFormFullVideo} className={cx('btn-action')}>
                    <CommentIcon />
                </Button>
                <p className={cx('info-count')}>{data?.comments_count}</p>
            </div>
            <div className={cx('actions-item')}>
                <Button className={cx('btn-action')}>
                    <FavouriteIcon />
                </Button>
                <p className={cx('info-count')}>{data?.likes_count}</p>
            </div>
            <div className={cx('actions-item')}>
                <Button className={cx('btn-action')}>
                    <ShareIcon />
                </Button>
                <p className={cx('info-count')}>{data?.shares_count}</p>
            </div>
        </div>
    );
}

VideoActions.propTypes = {
    data: PropTypes.object,
    index: PropTypes.number,
};

export default VideoActions;
