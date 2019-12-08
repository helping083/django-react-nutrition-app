import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auxiliary from '../Auxiliary/Auxiliary';
import AppBar from '../../Navigation/AppBar';
class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDrawer: false
    }
  }
  openToggleDrawers = () => {
    this.setState({showDrawer:true})
  }
  closeDrawer = () =>{
    this.setState({showDrawer:false})
  }
  render() {
    return (
      <Auxiliary>
        <AppBar/>
        <main>
          {this.props.children}
        </main> 
      </Auxiliary>
    );
  }
}

Layout.propTypes = {

};

export default Layout;