
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/'>
      <Homepage />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
