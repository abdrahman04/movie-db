import './App.css';
import Navbar from './components/navbar';
import About from './components/about';
import Search from "./components/search";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/search" component={ Search} />
        <Route path="/about" component={ About } />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
