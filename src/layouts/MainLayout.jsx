import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3500,
        }}
      />
    </>
  );
};

export default MainLayout;
