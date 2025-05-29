import * as callPath from '@/utils/request';

const update = async (token, payload) => {
    try {
        const formData = new FormData();
        Object.entries(payload).forEach(([k, v]) => formData.append(k, v ?? ''));

        const res = await callPath.post('auth/me?_method=PATCH', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (err) {
        return { errCode: err?.response?.status ?? 500 };
    }
};

export default update;
