import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { registerIntercepts, setAuthHeaders } from "apis/axios";
import { initializeLogger } from "./common/logger";

import Dashboard from "./components/Dashboard";
import CreateTask from "components/Tasks/CreateTask";
import ShowTask from "components/Tasks/ShowTask";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeLogger();
    registerIntercepts();
    setAuthHeaders(setLoading);
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/tasks/create" component={CreateTask} />
        <Route exact path="/tasks/:slug/show" component={ShowTask} />
      </Switch>
    </Router>
  );
};

export default App;
