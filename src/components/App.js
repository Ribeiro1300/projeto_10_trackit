import { useParams, BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Habits from "../pages/Habits";
import Today from "../pages/Today";
import History from "../pages/History";
import Top from "../components/Top";
import Footer from "../components/Footer";
import React from "react";
import UserContext from "../contexts/UserContext";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cadastro">
          <Register />
        </Route>
        <UserContext.Provider>
          <Route path="/habitos" exact>
            <Top />
            <Habits />
            <Footer />
          </Route>
          <Route path="/hoje" exact>
            <Top />
            <Today />
            <Footer />
          </Route>
          <Route path="/historico">
            <Top />
            <History />
            <Footer />
          </Route>
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
