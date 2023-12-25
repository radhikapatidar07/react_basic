import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/body/Body";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Body />
    </BrowserRouter>
  );
}

export default App;
