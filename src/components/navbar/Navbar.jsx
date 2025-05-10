import { IconMenu2 } from '@tabler/icons-react'
import "./stylesheet/Navbar.css";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        <button className="navbar-btn" onClick={handleSidebar}>
          <IconMenu2 size={30} stroke={1.2} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
