import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header appName = "Encuesta" />
      <Form value= " " />
      <Footer/>
    </div>
   
   );
}

export default App;
