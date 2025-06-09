import * as httpRequest from '../utils/request';

const UnLikeVideoService = async (idVideo, token) => {
    try {
        const res = await httpRequest.post(`videos/${idVideo}/unlike`, null, {
            headers: {
                Authorization: token,
            },
        });
        console.log('successUnLikeVideo: ', res);
        return res.data;
    } catch (error) {
        console.log('errorUnLikeVideo: ', error);
    }
};
export default UnLikeVideoService;
