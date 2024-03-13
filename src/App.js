import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <>
        <Nav />
        <Main />
        <Menu />
        <Footer />
      </>
    </div>
  );
}

export default App;
