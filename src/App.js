import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Meet with boss',
        completed: false
      }
    ]
  };


  render() {

    /*console.log(this.state.todos)*/

    return (
      <div className="App">
        <Todos todos = {this.state.todos} />  {/* passing in todos as prop */}
      </div>  
    )
  }
}

export default App;
