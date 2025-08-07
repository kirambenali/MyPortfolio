import { Outlet } from "react-router-dom";
import SplashCursor from "./SplashCursor/SplashCursor";

const PortfolioLayout = () => {
  return (
    <>
      <SplashCursor />
      <Outlet />
    </>
  );
};

export default PortfolioLayout;
