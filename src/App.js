import Header from "./components/Header";
import Song from "./components/Song";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header appName = "Biblioteca Musical de Alex_AB" />
      <Song value= " " />
      <Footer/>
    </div>
   
   );
}

export default App;
