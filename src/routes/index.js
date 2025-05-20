import config from '@/config';

//pages
import Follwing from '@/pages/Following';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';
//layout
import { HeaderOnly } from '@/layouts';
import Live from '@/pages/Live';
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.follwing,
        component: Follwing,
    },
    {
        path: config.routes.live,
        component: Live,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
