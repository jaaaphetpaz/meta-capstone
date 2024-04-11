import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import BookingFormTemplate from "./components/BookingFormTemplate";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/booking" exact element={<BookingFormTemplate />} />
        <Route path="/confirmed" exact element={<ConfirmedBooking />} />
        <Route path="/unavailable" exact element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
