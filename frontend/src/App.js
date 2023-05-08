import { BrowserRouter } from 'react-router-dom'
import Navbar from './navigation/Navbar'
import Router from './navigation/Router'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>,
    </div>
  );
}

export default App;
