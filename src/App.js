import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
