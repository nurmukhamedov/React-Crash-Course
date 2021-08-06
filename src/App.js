import React, {Component} from 'react';
import './App.css'; 
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import UserGreeting from './components/UserGreeting.js';
import myReactFile from './components/myReactFile';

class App extends Component{
  render(){
    return(
      <div className = "App">
        <UserGreeting/>
        <Greet name= "Bruce" heroName = "Batman"/>
        <Greet name= "Clark" heroName = "Hulk"/>
        <Greet name= "Diana " heroName = "Spiderman"/>
        <myReactFile></myReactFile>
        <Welcome/>
      </div>
    );
  }
}
export default App; 



 

