
import { BrowserRouter,Switch ,Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import NavbarMenu from "./Components/Layout/Navbar/NavbarMenu";
import AddUser from "./Components/Users/AddUser"
import About from "./Components/Pages/About/About";
import errorPage from "./Components/Pages/errorPage/errorPage";
import Home from "./Components/Pages/Home/Home";
import Edit from "./Components/Users/Edit";
import viewuser from "./Components/Users/viewuser";

function App() {
  return (
    <BrowserRouter>
     
        <NavbarMenu />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/About" component={About} />
          <Route path="/users/add" component={AddUser} />
          <Route path="/users/edit/:id" component={Edit} />
          <Route path="/users/view/:id" component={viewuser} />
          <Route component={errorPage} />
        </Switch>
     
    </BrowserRouter>
  );
}

export default App;
