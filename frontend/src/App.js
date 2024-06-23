
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer'
import Headers from './components/Header'

function App() {
  return (
    
      <div className="bg-[url('./assets/background_home.avif')] bg-cover bg-opacity-25 backdrop-blur-sm">
      <Headers />
      <Home />
      <Footer />
      </div>

    
  );
}

export default App;
