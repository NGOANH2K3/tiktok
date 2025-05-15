import reoutesConfig from '@/config/routes';

//pages
import Follwing from '@/pages/Following';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';
//layout
import { HeaderOnly } from '@/components/Layout';
const publicRoutes = [
    {
        path: reoutesConfig.home,
        component: Home,
    },
    {
        path: reoutesConfig.follwing,
        component: Follwing,
    },
    {
        path: reoutesConfig.profile,
        component: Profile,
    },
    {
        path: reoutesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: reoutesConfig.search,
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
