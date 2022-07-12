import SideBar from './SideBar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <SideBar />
      <main className="content">{children}</main>
    </div>
  );
};

export default DashboardLayout;
