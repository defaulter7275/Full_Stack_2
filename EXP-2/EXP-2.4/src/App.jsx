import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

function App() {
  const handleNavClick = (link) => {
    alert(`Navigating to ${link}...`);
  };

  return (
    <div className="nav-page-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark glass-nav fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#" onClick={() => handleNavClick('Brand')}>
            <span className="text-info">ULTRA</span>NAV
          </a>
          
          <button 
            className="navbar-toggler shadow-none border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-semibold" href="#" onClick={() => handleNavClick('Home')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#" onClick={() => handleNavClick('Features')}>Features</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fw-semibold" href="#" data-bs-toggle="dropdown">Services</a>
                <ul className="dropdown-menu shadow border-0 mt-3">
                  <li><a className="dropdown-item" href="#" onClick={() => handleNavClick('UI Design')}>UI Design</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleNavClick('Development')}>Development</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#" onClick={() => handleNavClick('Contact')}>Contact</a>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-info rounded-pill px-4 me-2" onClick={() => handleNavClick('Login')}>Login</button>
              <button className="btn btn-info text-white rounded-pill px-4 shadow" onClick={() => handleNavClick('Signup')}>Join Now</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="hero-content d-flex align-items-center justify-content-center text-center px-4">
        <div className="glass-card p-5 animate-in">
          <h1 className="display-2 fw-black text-white">Responsive Mastery</h1>
          <p className="lead text-white-50 fs-4 mb-4">Experiment 4: Advanced Responsive Navigation Bar</p>
          <div className="alert alert-info bg-transparent border-info text-info py-3 px-4 rounded-4">
            <strong>Pro Tip:</strong> Shrink your browser window to see the navbar transform into a mobile menu!
          </div>
        </div>
      </div>

      <footer className="footer-blur text-center py-4">
        <p className="mb-0 text-white-50">© 2024 Lab Unit-2 • Mobile-First Responsive Design</p>
      </footer>
    </div>
  )
}

export default App