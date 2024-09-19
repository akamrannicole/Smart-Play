import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faUserPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/signup');
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faBook} /> Smart-Play
        </div>
        <ul className="nav">
          {user ? (
            <>
              <li className="nav-item user-info">
                <span className="user-email">{user.username}</span>
              </li>
              <li className="nav-item">
                <button className="nav-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <button className="nav-button" onClick={() => navigate('/profile')}>
                  <FontAwesomeIcon icon={faUser} /> Profile
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-button" onClick={() => navigate('/signup')}>
                  <FontAwesomeIcon icon={faUserPlus} /> Sign Up
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
