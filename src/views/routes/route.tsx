import React from "react";
import { Switch, Route } from "react-router-dom";
import BottomNavbar from "../components/tabbar/BottomNavbar";
import Account from "../containers/Account";
import Mail from "../containers/Mail/Mail";
import Homepage from "../containers/Homepage/Homepage";
import Historypage from "../containers/History/History";
import Settings from "../containers/Account/Settings/Settings";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/account" exact component={Account} />
        <Route path="/history" exact component={Historypage} />
        <Route path="/mail" exact component={Mail} />
        <Route path="/account/settings" exact component={Settings} />
      </Switch>
      {window.location.pathname.includes("login") ||
      window.location.pathname.includes("account") ||
      window.location.pathname.includes("history") ||
      window.location.pathname.includes("mail") ||
      window.location.pathname.includes("account/settings") ? null : (
        <BottomNavbar />
      )}
    </div>
  );
}
