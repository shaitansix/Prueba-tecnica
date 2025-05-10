import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./stylesheet/Layout.css";

const Layout = ({ children }) => {
  return (
    <section className="layout-wrapper">
      <div className="layout-container">
        <Sidebar />

        <article className="layout-body">
          <Navbar />
          {children}
          <Footer />
        </article>
      </div>
    </section>
  );
};

export default Layout;
