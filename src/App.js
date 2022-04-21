import "./App.css";
import react from "react";
import Home from "./Pages/Home";
import Announcment from "./Component/Announcment";
import Slider from "./Component/Slider";

function App() {

  return (
    <div className="App">
    <Announcment/>
      <Home />
      <Slider/>
    </div>
  );
}

export default App;
