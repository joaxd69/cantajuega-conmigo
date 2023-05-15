import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
