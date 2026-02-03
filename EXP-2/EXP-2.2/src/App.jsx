import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const cardData = [
    {
      id: 1,
      title: "Web Development",
      description: "Master HTML, CSS, and JavaScript to build modern, high-performance websites.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      tag: "Coding"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Learn the art of creating stunning user interfaces and seamless experiences.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
      tag: "Creative"
    },
    {
      id: 3,
      title: "App Development",
      description: "Build robust mobile applications for both Android and iOS platforms.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      tag: "Mobile"
    },
    {
      id: 4,
      title: "Cloud Computing",
      description: "Explore serverless architecture and scalable cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      tag: "Network"
    }
  ];

  const handleEnroll = (title) => {
    alert(`Registration Success: You have enrolled in ${title}!`);
  };

  return (
    <div className="vibrant-wrapper">
      <nav className="navbar navbar-expand-lg glass-navbar sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">🎓 ACADEMY PRO</a>
          <div className="ms-auto d-flex align-items-center">
            <button className="nav-text-btn me-4" onClick={() => alert('Viewing Profile...')}>My Profile</button>
            <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold" onClick={() => alert('Logged Out')}>Logout</button>
          </div>
        </div>
      </nav>

      <div className="container py-5 mt-4">
        <header className="text-center mb-5 animate-slide-down">
          <h1 className="display-3 fw-bold main-title">Expert Courses</h1>
          <p className="lead text-dark-50 subtitle-text">Modern card-based layout using React & dynamic props</p>
        </header>

        <div className="row g-4 justify-content-center">
          {cardData.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div className="card h-100 course-card border-0">
                <div className="img-container">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <span className="badge rounded-pill badge-overlay">{item.tag}</span>
                </div>
                <div className="card-body p-4 text-center d-flex flex-column">
                  <h4 className="fw-bold mb-3">{item.title}</h4>
                  <p className="card-text text-secondary small flex-grow-1">{item.description}</p>
                  <button 
                    className="btn btn-outline-dark w-100 rounded-pill mt-3 py-2 fw-bold enroll-hover" 
                    onClick={() => handleEnroll(item.title)}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="py-5 mt-5 glass-footer">
        <div className="container text-center">
          <p className="mb-0 text-muted opacity-75">© 2024 Course Dashboard • Bootstrap Design Lab</p>
        </div>
      </footer>
    </div>
  )
}

export default App