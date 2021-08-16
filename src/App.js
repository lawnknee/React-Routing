import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import VendingMachine from './VendingMachine';
import Chips from "./Chips"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
