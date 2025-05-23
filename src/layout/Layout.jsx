import { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./stylesheet/Layout.css";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <section className="layout-wrapper">
      <div className="layout-container">
        <Sidebar showSidebar={showSidebar} />

        <article className="layout-body">
          <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          {children}
          <Footer />
        </article>
      </div>
    </section>
  );
};

export default Layout;
