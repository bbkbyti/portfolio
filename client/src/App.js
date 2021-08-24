
import './App.css';
import Data from './components/Data';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Data />
      {/* <Skills /> */}
      <Footer />
    </div>
  );
}

export default App;
