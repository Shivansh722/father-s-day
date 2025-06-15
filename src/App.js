import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{background: 'linear-gradient(135deg, #f5d6ba 0%, #fbeee6 100%)', color: '#2d2d2d'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '0.5em'}}>Happy Father\'s Day!</h1>
        <p style={{fontSize: '1.5rem', maxWidth: 600, margin: '0 auto 2em'}}>
          To the best dad in the world: Thank you for your endless love, support, and wisdom. You make every day brighter and every challenge easier. We love you!
        </p>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Father and child" style={{borderRadius: '1em', boxShadow: '0 4px 24px rgba(0,0,0,0.15)', width: 300, marginBottom: '2em'}} />
        <div style={{fontSize: '1.2rem', marginTop: '2em'}}>
          <em>"A father is someone you look up to no matter how tall you grow."</em>
        </div>
      </header>
    </div>
  );
}

export default App;
