import React, { ReactElement, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router";
import Home from "./LandingPage";
import "./custom.css";
import CreateGoalPage from "./CreateGoalPage";
import { BrowserRouter } from "react-router-dom";
import CreateTaskPage from "./CreateTaskPage";
import Page404 from "./Page404";
import DailySummary from "./DailySummaryPage";
import WeeklySummary from "./WeeklySummaryPage";
import Goals from "./Goals";
import AddProgressPage from "./AddProgressPage";
import Achievements from "./Achievements";
import CreateUser from "./CreateUser";
import ChooseUser from "./ChooseUser";
import CommonNavBar from "./CommonNavbar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

interface Props {}

export default function App({}: Props): ReactElement {
  const location = useLocation();

  const history = useHistory();

  const user = useSelector((state: any) => state.user);


  const renderNavbar = () => {
    if (location.pathname !== "/") {
      return <CommonNavBar />;
    }
  };

  useEffect(() => {
    if(user.isLoggedIn === false){
      history.push('/');
    }
  }, [])

  return (
    <>
      {renderNavbar()}
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/" exact>
          <ChooseUser />
        </Route>
        <Route path="/createUser" exact>
          <CreateUser />
        </Route>
        <Route path="/createGoal" exact>
          <CreateGoalPage />
        </Route>
        <Route path="/createTask" exact>
          <CreateTaskPage />
        </Route>
        <Route path="/addProgress" exact>
          <AddProgressPage />
        </Route>
        <Route path="/goals" exact>
          <Goals />
        </Route>
        <Route path="/dailySummary" exact>
          <DailySummary />
        </Route>
        <Route path="/weeklySummary" exact>
          <WeeklySummary />
        </Route>
        <Route path="/achievements" exact>
          <Achievements />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
}
