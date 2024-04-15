import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>BookCritic</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </nav>
  );
}

export default NavBar;
