import logo from './icons/logo.svg';
import './App.css';
import './icons/icono.css';
import Header from './views/Header';

function App() {
  return (
    <div className="App">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
