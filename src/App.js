import "./App.css";
import BookingForm from "./components/BookingForm";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <>
        <Nav />
        <Header />
        <BookingForm />
      </>
    </div>
  );
}

export default App;
