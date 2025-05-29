import * as request from '@/utils/request';

const logout = async (token) => {
    try {
        const res = await request.post(
            'auth/logout',
            {},
            {
                headers: {
                    Authorization: token,
                },
            },
        );
        return res;
    } catch (err) {
        return { errorCode: err.response.status };
    }
};

export default logout;
