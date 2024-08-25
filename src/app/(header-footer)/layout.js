import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
