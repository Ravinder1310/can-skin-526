import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import AllRoutes from './components/AllRoutes';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
