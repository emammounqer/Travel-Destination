import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import TourDetails from "./components/TourDetails/TourDetails";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city/:id" element={<TourDetails />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
