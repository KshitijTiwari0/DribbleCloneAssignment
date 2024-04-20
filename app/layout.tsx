import { useClient } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const Layout = ({ children }) => {
  useClient(); // Mark this component as client-side

  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
