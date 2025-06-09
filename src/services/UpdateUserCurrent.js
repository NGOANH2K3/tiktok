import * as callPath from '@/utils/request';

const update = async (token, payload) => {
    try {
        let dataToSend;
        let headers;

        // Nếu có avatar thì dùng FormData
        if (payload && payload.avatar) {
            const formData = new FormData();

            Object.entries(payload).forEach(([k, v]) => {
                if (v !== undefined && v !== null) {
                    formData.append(k, v);
                }
            });

            dataToSend = formData;
            headers = {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            };
        } else if (payload && typeof payload === 'object') {
            dataToSend = payload;
            headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            };
        } else {
            throw new Error('Payload must be a valid object');
        }

        const res = await callPath.post('auth/me?_method=PATCH', dataToSend, {
            headers,
        });

        return res.data;
    } catch (err) {
        console.error('Update error', err?.response?.data ?? err);
        return { errCode: err?.response?.status ?? 500 };
    }
};

export default update;
