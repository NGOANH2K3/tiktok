import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './PageVideo.module.scss';
import { MusicIcon } from '@/components/Icons';
import { UserAuth } from '../../components/Store';
import ListComments from '../../components/ListComments';
import Image from '../../components/Image';
import Button from '../../components/Button';
import VideoPlayer from './VideoPlayer';
import TextBox from '../../components/TextBox';
import configs from '../../services';

const cx = classNames.bind(styles);

function PageVideo({ data = {}, idVideo }) {
    const textareaRef = useRef();
    const location = useLocation();

    const [commensCount, setCommensCount] = useState(data?.comments_count);
    const [dataComments, setDataComments] = useState([]);
    const [valueText, setValueText] = useState('');

    const { tokenStr, userAuth, setOpenFormLogin } = UserAuth();

    useEffect(() => {
        handleGetComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleGetComments = async () => {
        if (!tokenStr && !userAuth) {
            return;
        }

        const data = await configs.comments(idVideo || location.pathname.split('/')[2], tokenStr);

        setDataComments(data);
    };

    const handlePostComment = async () => {
        if (!valueText) {
            return;
        }

        await configs.postComments(idVideo || location.pathname.split('/')[2], valueText, tokenStr);
        handleGetComments();

        setValueText('');
        setCommensCount((prev) => prev + 1);
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();

            handlePostComment();
        }
    };

    const handleChangeValueText = (e) => {
        if (e.target.value.startsWith(' ')) {
            return;
        }

        setValueText(e.target.value);
    };

    const handleOpenFormLogin = (e) => {
        e.preventDefault();

        setOpenFormLogin(true);
    };

    return (
        <div className={cx('container-detailvideo')}>
            <div className={cx('container')}>
                <div className={cx('videoplayer-container')}>
                    <div className={cx('video-content')}>
                        <VideoPlayer data={data} />
                        <div className={cx('info-detail')}>
                            <div className={cx('user-detail')}>
                                <div className={cx('user-info')}>
                                    <div className={cx('user-avatar')}>
                                        <Image src={data?.user?.avatar} alt={data?.user?.nickname} />
                                    </div>
                                    <div className={cx('name-user')}>
                                        <h2 className={cx('nickname')}>{data?.user?.nickname}</h2>
                                        <p className={cx('username')}>
                                            {data?.user?.first_name + ' ' + data?.user?.last_name}
                                            <span> · </span>
                                            <span className={cx('time-uploaded')}>
                                                {data?.updated_at?.split(' ')[0]}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <Button className={cx('followbtn-user')} primary>
                                    Follow
                                </Button>
                            </div>
                            <p className={cx('description')}>{data?.description}</p>
                            {data.music && (
                                <p className={cx('info-music')}>
                                    <MusicIcon />
                                    {data?.music}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className={cx('comment-content')}>
                        <h1 className={cx('comment-title')}>
                            <span className={cx('comment-total')}>{commensCount}</span>
                            comments
                        </h1>
                        <div className={cx('post-content')}>
                            {userAuth && tokenStr && (
                                <div className={cx('avatar-user')}>
                                    <Image src={userAuth.avatar} />
                                </div>
                            )}
                            <div className={cx('form-text')}>
                                <TextBox
                                    ref={textareaRef}
                                    onClick={userAuth && tokenStr ? handlePostComment : handleOpenFormLogin}
                                    onChange={handleChangeValueText}
                                    onKeyDown={userAuth && tokenStr ? handleKeyDown : handleOpenFormLogin}
                                    setTextValue={setValueText}
                                    textValue={valueText}
                                />
                            </div>
                        </div>
                        <div className={cx('list-container')}>
                            {dataComments.map((items, index) => (
                                <ListComments
                                    data={items}
                                    key={items.id}
                                    className={cx('loading-content')}
                                    index={index}
                                    creator={data?.user?.id}
                                    setDataComments={setDataComments}
                                    setCommensCount={setCommensCount}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <aside className={cx('sidebar-videos')}></aside>
            </div>
        </div>
    );
}

PageVideo.propTypes = {
    data: PropTypes.object.isRequired,
    idVideo: PropTypes.string.isRequired,
};

export default PageVideo;
