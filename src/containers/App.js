import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import robots from '../robots.js'
import AddRobots from '../components/Add_robot';
import DeleteBox from '../components/Delete_robo'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots_list: [],
      searchfield: ''
    }
  }

  componentDidMount() {

  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  addToList = userInfo =>{
    userInfo.id = this.state.robots_list.length + 1;
    this.setState({robots_list:[...this.state.robots_list,userInfo]});
    //console.log(userInfo);
  };

  deleteRobo = userInfo =>{
  var arr = [...this.state.robots_list];
  var new_arr = arr.filter(function(obj){ return obj.id !== parseInt(userInfo.id);});
  this.setState({robots_list:new_arr}); 
  //Todo Send an message if it is not in the list
 }

  render() {
    const { robots_list, searchfield } = this.state;
    const filteredRobots = robots_list.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading!!!</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <AddRobots addToList={this.addToList}/>
          <SearchBox searchChange={this.onSearchChange}/>
          <DeleteBox deleteRobo={this.deleteRobo}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;