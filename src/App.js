import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Category from "./components/Category";
import Product from "./components/Product";
import Vendor from "./components/Vendor";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Category} path='/category' />
        <Route component={Product} path='/product' />
        <Route component={Vendor} path='/vendor' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
