import './App.css';

// import ParticlesComponent from './components/particles';
import ParticlesBackground from './components/bgEffect/ParticlesBackground';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App max-w-7xl m-auto">
      {/* <ParticlesComponent id="particles" />
       */}
      <ParticlesBackground/>
      <HomePage/>
    </div>
  );
}

export default App;
