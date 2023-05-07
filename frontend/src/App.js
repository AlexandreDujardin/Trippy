import { BrowserRouter } from 'react-router-dom'
import Navbar from './navigation/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
    </div>
  );
}

export default App;
