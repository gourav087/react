import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Welcome to My React Website</h1>
        <p>This is a basic React website created for practice.</p>
        <button>Learn More</button>
      </header>

      <section className="content">
        <div className="card">
          <h2>Networking</h2>
          <p>Learn CCNA, CCNP, and Network Security.</p>
        </div>

        <div className="card">
          <h2>Cloud</h2>
          <p>Explore AWS, Azure, and Cloud Computing.</p>
        </div>

        <div className="card">
          <h2>DevOps</h2>
          <p>Master Docker, Kubernetes, and CI/CD.</p>
        </div>
      </section>

      <footer>
        <p>© 2026 My React Website</p>
      </footer>
    </div>
  );
}

export default App;