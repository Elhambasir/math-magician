// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="wrapper">
    <Navbar />
    <Outlet />
  </div>
);
export default Layout;
