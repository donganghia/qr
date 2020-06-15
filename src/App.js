import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import CreateGiftCode from "./components/giftcode/Create";
import DetailGiftCode from "./components/giftcode/Detail";
import QrGiftCode from "./components/giftcode/Qr";

function App() {
  return (<Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/231284" component={CreateGiftCode} />
            <Route path="/130185" component={DetailGiftCode} />
            <Route path="/231094" component={QrGiftCode} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
