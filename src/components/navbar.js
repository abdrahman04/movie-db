import {Link } from 'react-router-dom';


function Navbar() {
    return (
      <nav className="nav-bar">
          <div className="nav-bar-div">
              <p className="Title">MoviesDB</p>
              <Link  to="/search"    className="link">Search</Link>
              <Link to="/about" className="link" >About</Link>
          </div>
      </nav>
    );
  }
  
  export default Navbar;
  