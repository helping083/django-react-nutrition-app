import React, { Component } from 'react';

class Goods extends Component {
  state = {

  }
  componentDidMount() {
    fetch('/nutritions/')
      .then(res=>res.json())
      .then((item)=>{console.log(item)})
      .catch((err)=>{console.log(err)});
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Goods;