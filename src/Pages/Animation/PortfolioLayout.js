import { Outlet } from "react-router-dom";
import SplashCursor from "./SplashCursor/SplashCursor";

const PortfolioLayout = () => {
  return (
    <>
      <div className="liquid-ether-container">
       
      </div>
      <SplashCursor />
      <Outlet />
    </>
  );
};

export default PortfolioLayout;
