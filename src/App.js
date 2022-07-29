import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import Header from './Header';
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import Footer from "./Footer";
import About from "./assets/About";
import PriceTable from "./PriceTable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Gallery />
      {/* <PriceTable /> */}
      <Footer />
    </div>
  );
}

export default App;
