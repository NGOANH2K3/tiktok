import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FullScreen.module.scss';

import { UserAuth, UserVideo } from '../../components/Store';
import config from '../../services';
import Comment from './Comment';
import Videos from './videos';

const cx = classNames.bind(styles);

function FullScreen() {
    const { listVideos, setListVideos, positionVideo, setPositionVideo } = UserVideo();
    const { tokenStr } = UserAuth();

    const [urlPath, setUrlPath] = useState();
    const [videoData, setVideo] = useState({});

    useEffect(() => {
        const tempId = listVideos[positionVideo]?.id;

        if (tempId) {
            // Nếu có tempid sẽ cập nhật lại href
            window.history.replaceState(null, '', `/video/${tempId}`);

            setUrlPath(window.location.href);
        }
    }, [positionVideo, listVideos]);

    useEffect(() => {
        const handleKeyUp = (e) => {
            e.key === 'ArrowDown' &&
                setPositionVideo((prev) => (positionVideo >= listVideos.length - 1 ? positionVideo : prev + 1));
            e.key === 'ArrowUp' && setPositionVideo((prev) => (positionVideo <= 0 ? positionVideo : prev - 1));
        };

        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [positionVideo, listVideos]);

    useEffect(() => {
        const idVideo = listVideos[positionVideo]?.id;

        fetchApi(idVideo);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [positionVideo, listVideos]);

    const fetchApi = async (idVideo) => {
        const data = await config.getAVideo(idVideo ?? window.location.pathname.split('/')[2], tokenStr);

        setVideo(data);
    };

    const handleNextIndex = useCallback(() => {
        setPositionVideo((prev) => (positionVideo >= listVideos.length - 1 ? positionVideo : prev + 1));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [positionVideo, listVideos]);

    const handlePrevIndex = useCallback(() => {
        setPositionVideo((prev) => (positionVideo <= 0 ? positionVideo : prev - 1));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [positionVideo, listVideos]);

    if (Object.keys(videoData).length === 0) {
        return;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-modal')}>
                <Videos
                    onPrevPage={handlePrevIndex}
                    onNextPage={handleNextIndex}
                    data={videoData}
                    index={positionVideo}
                    listVideos={listVideos}
                />
                <Comment
                    urlPath={urlPath}
                    data={videoData}
                    idVideo={listVideos[positionVideo]?.id}
                    statePosition={[positionVideo, setPositionVideo]}
                    listVideoState={[listVideos, setListVideos]}
                />
            </div>
        </div>
    );
}

export default FullScreen;
