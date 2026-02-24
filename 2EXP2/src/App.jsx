import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const cards = [
    { id: 1, title: "Card 1", text: "This is card number one." },
    { id: 2, title: "Card 2", text: "This is card number two." },
    { id: 3, title: "Card 3", text: "This is card number three." }
  ];

  return (
    <div className="futuristic-bg d-flex align-items-center justify-content-center">
      <div className="container py-5">
        <h2 className="text-center text-light mb-5 fw-bold">
           Card Layout Demo
        </h2>

        <div className="row g-4">
          {cards.map(card => (
            <div className="col-md-4" key={card.id}>
              <div className="card futuristic-card h-100 text-center p-4">
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <button className="btn futuristic-btn mt-3">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;