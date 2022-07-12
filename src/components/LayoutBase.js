import NavBar from './NavBar';
import Footer from './Footer';
const dashboardLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <NavBar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default dashboardLayout;
