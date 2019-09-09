import React, { Component } from 'react';
import NavBar from  './components/NavBar';
import Table from './components/Table';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Table/>
      </div>
    );
  }
}
export default App;