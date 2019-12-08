import React from 'react';
import './App.css';
import Goods from '../src/components/goods/Goods';
import Layout from '../src/HOC/Layout/Layout';
import Routes from './Navigation/Routes/Routes';

function App() {
  return (
    <Layout>
      <div className="App">
        <Goods/>
        <div>
            {<Routes/>}
        </div>
      </div>
    </Layout>
  );
}

export default App;
