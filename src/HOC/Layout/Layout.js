import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import AppBar from '../../Navigation/AppBar';
import Goods from '../../components/goods/Goods';
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
        <Goods/>
        <main>
          {this.props.children}
        </main> 
      </Auxiliary>
    );
  }
}

export default Layout;