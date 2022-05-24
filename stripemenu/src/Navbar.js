import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = ({ target }) => {
    const page = target.textContent;
    const tempBtn = target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = ({ target }) => {
    if (target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOut={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn" onMouseOver={displaySubmenu}>
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
