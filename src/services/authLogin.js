import * as request from '@/utils/request';

const login = async (email, password) => {
    try {
        const res = await request.post('auth/login', {
            email,
            password,
        });
        return res.data;
    } catch (err) {
        return { errcode: err.response.status };
    }
};

export default login;
