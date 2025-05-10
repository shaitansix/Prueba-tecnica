import "./stylesheet/Navbar.css";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        <button className="navbar-btn" onClick={handleSidebar}>
          <span>=</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
