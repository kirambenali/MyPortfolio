import { Outlet } from "react-router-dom";
import SplashCursor from "./SplashCursor/SplashCursor";
import LiquidEther from "./Liquid/LiquidEther";
const PortfolioLayout = () => {
  return (
    <>
      <div className="liquid-ether-container">
        <LiquidEther/>
      </div>
      <SplashCursor />
      <Outlet />
    </>
  );
};

export default PortfolioLayout;
