// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Following from '~/Pages/Following';
import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';

//khong login
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
];

// login
const privateRoutes = {};

export { publicRoutes, privateRoutes };
