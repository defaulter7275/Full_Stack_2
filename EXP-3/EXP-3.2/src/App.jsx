import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const Dashboard = () => (
  <div className="glass-card p-5 animate-fade-in text-center">
    <div className="avatar-circle mx-auto mb-4">BDK</div>
    <h1 className="display-5 fw-bold">Welcome!</h1>
    <p className="text-muted mb-4">To my personal workspace. Listed is my recent progress and skills.</p>
    <div className="row g-3">
      <div className="col-6"><div className="stat-card p-3"><h5>12</h5><small>Projects</small></div></div>
      <div className="col-6"><div className="stat-card p-3"><h5>450+</h5><small>Commits</small></div></div>
    </div>
    <Link to="/profile" className="btn btn-dark w-100 mt-4 py-2 rounded-pill">View Full Profile</Link>
    <Link to="/skills" className="btn btn-dark w-100 mt-4 py-2 rounded-pill">View Skills</Link>
    <Link to="/about" className="btn btn-dark w-100 mt-4 py-2 rounded-pill">View About Me</Link>
  </div>
);

const Profile = () => (
  <div className="glass-card p-5 animate-fade-in">
    <h2 className="fw-bold mb-4">My Profile</h2>
    <ul className="list-group list-group-flush bg-transparent">
      <li className="list-group-item bg-transparent px-0 d-flex justify-content-between">
        <span className="fw-bold">Full Name</span> <span className="text-muted">Baivhav Kummar</span>
      </li>
      <li className="list-group-item bg-transparent px-0 d-flex justify-content-between">
        <span className="fw-bold">UID</span> <span className="text-muted">23BAI70670</span>
      </li>
      <li className="list-group-item bg-transparent px-0 d-flex justify-content-between">
        <span className="fw-bold">Email</span> <span className="text-muted">baivhavkummar@gmail.com</span>
      </li>
      <li className="list-group-item bg-transparent px-0 d-flex justify-content-between">
        <span className="fw-bold">Location</span> <span className="text-muted">Chandigarh, INDIA</span>
      </li>
      <li className="list-group-item bg-transparent px-0 d-flex justify-content-between">
        <span className="fw-bold">Availability</span> <span className="text-success fw-bold">Open to Work</span>
      </li>
    </ul>
    <button className="btn btn-outline-dark mt-4 rounded-pill px-4" onClick={() => alert('Editing Profile...')}>Edit Details</button>
  </div>
);

const Skills = () => (
  <div className="glass-card p-5 animate-fade-in">
    <h2 className="fw-bold mb-4">Technical Skills</h2>
    <div className="mb-4">
      <div className="d-flex justify-content-between mb-1"><span>React.js</span><span>30%</span></div>
      <div className="progress rounded-pill" style={{height: '8px'}}><div className="progress-bar bg-primary" style={{width: '30%'}}></div></div>
    </div>
    <div className="mb-4">
      <div className="d-flex justify-content-between mb-1"><span>UI/UX Design</span><span>55%</span></div>
      <div className="progress rounded-pill" style={{height: '8px'}}><div className="progress-bar bg-success" style={{width: '55%'}}></div></div>
    </div>
    <div className="mb-4">
      <div className="d-flex justify-content-between mb-1"><span>Bootstrap & CSS</span><span>15%</span></div>
      <div className="progress rounded-pill" style={{height: '8px'}}><div className="progress-bar bg-warning" style={{width: '15%'}}></div></div>
    </div>
    <div className="mb-4">
      <div className="d-flex justify-content-between mb-1"><span>JavaScript</span><span>60%</span></div>
      <div className="progress rounded-pill" style={{height: '8px'}}><div className="progress-bar bg-info" style={{width: '60%'}}></div></div>
    </div>
  </div>
);

const About = () => (
  <div className="glass-card p-5 animate-fade-in">
    <h2 className="fw-bold mb-3">About Me</h2>
    <p className="lead text-dark">A dedicated AI and Machine Learning engineering student with a strong foundation in developing 
robust ML models and analyzing complex datasets.  </p>
    <p className="text-muted">
      I specialize in creating accessible, responsive, and high-performance Single Page Applications.
      Seeking a challenging role to apply my technical skills to impactful projects and grow 
      professionally in software development and cutting-edge technology. 
      My philosophy is to bridge the gap between design and code to create seamless user experiences.
    </p>
    <hr className="my-4" />
    <h5 className="fw-bold">Core Values</h5>
    <div className="d-flex gap-2 flex-wrap">
      <span className="badge rounded-pill bg-light text-dark border p-2 px-3">Performance</span>
      <span className="badge rounded-pill bg-light text-dark border p-2 px-3">Accessibility</span>
      <span className="badge rounded-pill bg-light text-dark border p-2 px-3">Innovation</span>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="profile-bg">
        <nav className="navbar navbar-expand-lg glass-nav sticky-top py-3">
          <div className="container">
            <Link className="navbar-brand fw-bold fs-3 text-gradient" to="/">23BAI70670_PROFILE</Link>
            <div className="ms-auto d-flex gap-2">
              <NavLink className={({isActive}) => isActive ? "nav-link custom-active" : "nav-link"} to="/">Dashboard</NavLink>
              <NavLink className={({isActive}) => isActive ? "nav-link custom-active" : "nav-link"} to="/skills">Skills</NavLink>
              <NavLink className={({isActive}) => isActive ? "nav-link custom-active" : "nav-link"} to="/profile">Profile</NavLink>
              <NavLink className={({isActive}) => isActive ? "nav-link custom-active" : "nav-link"} to="/about">About</NavLink>
            </div>
          </div>
        </nav>

        <div className="container py-5 mt-4 d-flex justify-content-center">
          <div className="w-100" style={{maxWidth: '700px'}}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>

        <footer className="footer-glass py-4 text-center">
          <small className="text-secondary fw-semibold">Portfolio SPA Experiment • Unit-3 Routing</small>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App