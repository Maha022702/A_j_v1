import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/TemporaryNavbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* bg-gradient-to-b from-gray-600 to-gray-0  */}
      <div className="py-28">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
