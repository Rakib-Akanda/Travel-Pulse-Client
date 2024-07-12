import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";

const RootLayout = () => {
  return (
    <div className="fontStyle-Kumbh">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
