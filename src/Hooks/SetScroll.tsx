import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Hook for auto scroll to top when navigating to
// different route or page

const SetScroll = function () {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default SetScroll;
