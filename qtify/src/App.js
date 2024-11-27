import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage />
    </div>
  );
}

export default App;
