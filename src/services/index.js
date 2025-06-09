import following from './accountsFollowing';
import suggest from './accountSuggestService';
import login from './authLogin';
import logout from './authLogout';
import comments from './comments';
import Base64Convert from './convertBase64ToBlob';
import { followUser, unFollowUser } from './follow';
import user from './getUser';
import getAVideo from './getVideo';
import LikeVideoService from './LikePostService';
import videos from './listVideoService';
import postComments from './postComments';
import search from './searchServices';
import UnLikeVideoService from './UnLikePostService';
import updateComments from './updateComments';
import update from './UpdateUserCurrent';
const configs = {
    login,
    search,
    logout,
    suggest,
    user,
    following,
    update,
    Base64Convert,
    getAVideo,
    videos,
    followUser,
    unFollowUser,
    LikeVideoService,
    UnLikeVideoService,
    comments,
    postComments,
    updateComments,
};

export default configs;
