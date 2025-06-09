import * as httpRequest from '../utils/request';

const LikeVideoService = async (idVideo, token) => {
    try {
        const res = await httpRequest.post(`videos/${idVideo}/like`, null, {
            headers: {
                Authorization: token,
            },
        });
        console.log('successLikeVideo: ', res);
        return res.data;
    } catch (error) {
        console.log('errorLikeVideo: ', error);
    }
};
export default LikeVideoService;
