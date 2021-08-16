import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import VendingMachine from './VendingMachine';
// import Chips from "./Chips"
// import Soda from "./Soda"
// import Hotdog from "./Hotdog"
import Item from "./Item";
import Navbar from "./Navbar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/chips">
          <Item item="chips" />
        </Route>
        <Route exact path="/soda">
          <Item item="soda" />
        </Route>
        <Route exact path="/hotdog">
        <Item item="hotdog" />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
