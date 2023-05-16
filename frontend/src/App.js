import Navbar from './navigation/Navbar'
import Router from './navigation/Router'
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
