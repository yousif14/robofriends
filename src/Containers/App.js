import React, { Component } from 'react';
import CardList from '../Components/cardlist';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll.js';
import './App.css';

class App extends Component{
    constructor(){
    super()
    this.state ={ 
    robots: [],
    Searchfield: ''
    }}

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>this.setState({ robots:users }));
        
    }


    OnSearchChange = (event) => {
    this.setState({Searchfield: event.target.value })
    }

    render(){
        const {robots, Searchfield} = this.state;
        const filteredrobots = robots.filter(robot => {
        return robot.name.toLocaleLowerCase().includes(Searchfield.toLocaleLowerCase())
        })
        return !robots.length ?
            <h1 className='tc'>Looding</h1> :
        (
        <div className='tc'> 
            <h1>RoboFriends</h1>
            <SearchBox searchchange={this.OnSearchChange} />

            <Scroll>
                <CardList robots={filteredrobots}/>
            </Scroll>
            
    
        </div>
            );
        }

}
export default App;