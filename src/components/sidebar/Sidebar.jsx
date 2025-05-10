import { Link } from "react-router";
import "./stylesheet/Sidebar.css";

const Sidebar = ({ showSidebar }) => {
  return (
    <section className="sidebar-wrapper">
      <div className="sidebar-container">
        <header className="sidebar-title" style={{ width: showSidebar ? "fit-content" : "0px" }}>Menu</header>

        <article className="sidebar-menu" style={{ width: showSidebar ? "200px" : "0px" }}>
          <Link className="sidebar-link" to="/doctors">
            Doctores
          </Link>
          <Link className="sidebar-link" to="/pokemons">
            Pokemones
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Sidebar;
