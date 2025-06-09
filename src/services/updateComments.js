import * as CallPath from '@/utils/request';

const updateComments = async (contentComment, idComment, token) => {
    try {
        const res = await CallPath.put(
            `comments/${idComment}`,
            {
                comment: contentComment,
            },
            {
                headers: {
                    Authorization: token,
                },
            },
        );

        return res.data;
    } catch (error) {
        return { Error: error.response.status };
    }
};

export default updateComments;
