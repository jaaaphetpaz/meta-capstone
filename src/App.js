import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import BookingFormTemplate from "./components/BookingFormTemplate";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/booking" exact element={<BookingFormTemplate />} />
        <Route path="/confirmed" exact element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
