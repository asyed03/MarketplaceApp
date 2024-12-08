"use client";
import { ReactNode, useEffect } from "react";

function PageLoader({ children }: { children: ReactNode }) {
  useEffect(() => {
    // add stuff here that should run on page load
  }, []); // Empty dependency array ensures that the effect runs once on mount

  return children;
}

export default PageLoader;
