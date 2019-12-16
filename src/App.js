import React from 'react';
import './App.css';
import Layout from '../src/HOC/Layout/Layout';
import Routes from './Navigation/Routes/Routes';
import { connect } from 'react-redux';

function App(props) {
  return (
    <Layout>
      <div className="App">
        <Routes isAuth={props.isSignUp}/>
      </div>
    </Layout>
  );
}
const mapStateToProps = state => {
  return {
    isSignUp: state.auth.isSignUp
  }
}
export default connect(mapStateToProps, null)(App);
