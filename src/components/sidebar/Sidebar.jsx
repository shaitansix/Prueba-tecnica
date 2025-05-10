import { Link } from "react-router";
import "./stylesheet/Sidebar.css";

const Sidebar = () => {
  return (
    <section className="sidebar-wrapper">
      <div className="sidebar-container">
        <header className="sidebar-title">Menu</header>

        <article className="sidebar-menu">
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
