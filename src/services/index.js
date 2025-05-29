import following from './accountsFollowing';
import suggest from './accountSuggestService';
import login from './authLogin';
import logout from './authLogout';
import Base64Convert from './convertBase64ToBlob';
import user from './getUser';
import search from './searchServices';
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
};

export default configs;
