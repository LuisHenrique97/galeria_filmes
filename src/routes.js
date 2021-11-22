import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme/filme";
import Header from "./components/Header";
import Favoritos from "./pages/Favoritos/favoritos";
import Erro404 from "./pages/Erro404/erro404";


const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme/:id" component={Filme}/>
                <Route exact path="/favoritos" component={Favoritos}/>
                <Route path="*" component={Erro404}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes