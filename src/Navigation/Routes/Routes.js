import { Route ,Switch } from 'react-router-dom';
import React from 'react';
import AuthPage from '../../pages/Auth';
const routes = (props) => { 
  return (
    <React.Fragment>
      <Switch>
        <Route path="/auth" component={AuthPage}/>
      </Switch>
    </React.Fragment>
  )
};

export default routes;