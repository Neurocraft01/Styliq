import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from '../ui/FloatingButtons';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
};

export default Layout;
