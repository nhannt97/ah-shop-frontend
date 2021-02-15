import Home from './page/Home';

// overview
export const HOME = '/'

const routers = [
  {
    id: 1,
    path: HOME,
    isAuthenticate: false,
    component: Home
  },
];

export default routers;