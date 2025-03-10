import Drawer from "../Drawer/Drawer";

const Layout = ({ children }) => {
    return (
      <div className="flex">
        <Drawer />
        <div className="ml-64 flex-1 p-4">{children}</div>
      </div>
    );
  };
  
  export default Layout;
  