import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";

const Routes = () =>(
        <BrowserRouter>
        <Navbar></Navbar>
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
                <Route path="/products" exact>
                    <Catalog></Catalog>
                </Route>
            </Switch>
        </BrowserRouter>
    );

export default Routes;