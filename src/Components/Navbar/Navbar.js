function Navbar() {
  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Emblem_of_India_%28Government_Gazette%29.svg/1200px-Emblem_of_India_%28Government_Gazette%29.svg.png" alt="" />
      <a className="navbar-brand navbar-logo" href="/">
        Government of India | Ministry of Labour
      </a>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">     
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
            Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
