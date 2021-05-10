import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router';
import Home from './LandingPage';
import './custom.css'
import CreateGoalPage from './CreateGoalPage';
import { BrowserRouter } from 'react-router-dom';
import CreateTaskPage from './CreateTaskPage';
import Page404 from './Page404';
import DailySummary from './DailySummaryPage';
import WeeklySummary from './WeeklySummaryPage';
import Goals from './Goals';
import AddProgressPage from './AddProgressPage';
import Achievements from './Achievements';
import CreateUser from './CreateUser';
import ChooseUser from './ChooseUser';

interface Props {
    
}

export default function App({}: Props): ReactElement {
  return(
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact>
          <Home /> 
        </Route>
        <Route path = "/chooseUser" exact>
          <ChooseUser />
        </Route>
        <Route path = '/createUser' exact>
          <CreateUser />
        </Route>
        <Route path = "/createGoal" exact>
          <CreateGoalPage />
        </Route>
        <Route path = "/createTask" exact>
          <CreateTaskPage />
        </Route>
        <Route path = "/addProgress" exact>
          <AddProgressPage />
        </Route>
        <Route path = "/goals" exact>
          <Goals />
        </Route>
        <Route path = "/dailySummary" exact>
          <DailySummary />
        </Route>
        <Route path = "/weeklySummary" exact>
          <WeeklySummary />
        </Route>
        <Route path = '/achievements' exact>
          <Achievements />
        </Route>
        <Route path = "*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
