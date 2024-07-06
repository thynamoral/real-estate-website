import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./RootLayout.scss";

const RootLayout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
