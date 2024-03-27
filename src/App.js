import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Booking1 from "./pages/Booking1";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/booking1" exact element={<Booking1 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
