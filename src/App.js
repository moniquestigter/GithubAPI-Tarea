import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Users from './components/Users';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  } 

  addNewUser = info => {
    this.setState(p => ({
      list: p.list.concat(info)
    }))
  }

  deleteUser(e) {
    var array = [...this.state.list]; // make a separate copy of the array
    var index = array.indexOf(e.target.value)
    array.splice(index, 1);
    this.setState({list: array});
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Search onSubmit={this.addNewUser}/>
          <br />
          <List onSubmit={this.deleteUser} list={this.state.list} /> 
        </div>
      </div>
    );
  }
}

export default App;

const List = props => {
  return <div>
    {props.list && props.list.map(user => <Users onSubmit={props.deleteUser} {...user} />)}
      
  </div>
}
