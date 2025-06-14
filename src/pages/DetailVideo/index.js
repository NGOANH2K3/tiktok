import { useEffect, useState } from 'react';

import PageVideo from '../../layouts/PageVideo';

import { UserAuth } from '@/components/Store';
import { useLocation, useParams } from 'react-router-dom';
import configs from '../../services';

function DetailVideo() {
    const location = useLocation();
    const { idVideo } = useParams();

    const [detailsVideo, setDetailsVideo] = useState({});
    const { tokenStr } = UserAuth();

    const handleGetInfoVideo = async () => {
        const data = await configs.getAVideo(idVideo || location.pathname.split('/')[2], tokenStr);

        setDetailsVideo(data);
    };

    useEffect(() => {
        handleGetInfoVideo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (Object.keys(detailsVideo).length === 0) {
        return;
    }

    return (
        <div style={{ marginLeft: '300px', width: '100%', minHeight: '100vh' }}>
            <PageVideo data={detailsVideo} idVideo={idVideo} />
        </div>
    );
}

export default DetailVideo;
