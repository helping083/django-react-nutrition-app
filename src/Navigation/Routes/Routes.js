import { Route ,Switch, Redirect } from 'react-router-dom';
import React from 'react';
import AuthPage from '../../pages/Auth';
import Logout from '../../components/Logout/Logout';
import Cart from '../../pages/Cart/Cart';
import PropTypes from 'prop-types';
import Home from '../../pages/Home/Home';
const Routes = (props) => { 
  return (
    <React.Fragment>
      <Switch>
        <Route path="/auth" component={AuthPage}/>
        {props.isAuth ? <Route path="/logout" component={Logout}/>:null}
        {props.isAuth ? <Route path="/orders/usersList/:uuid" component={Cart}/>: null}
        <Route path="/" component={Home} exact/>
        <Redirect to='/'/>
      </Switch>
    </React.Fragment>
  )
};
Routes.propTypes = {
  path: PropTypes.string,
  to: PropTypes.string,
  isAuth: PropTypes.bool
};
export default Routes;