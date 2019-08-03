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
        completed: true
      },
      {
        id: 3,
        title: 'Meet with boss',
        completed: false
      }
    ]
  };

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
    
}


  render() {

    /*console.log(this.state.todos)*/

    return (
      <div className="App">
        <Todos todos = {this.state.todos} markComplete={this.markComplete}/>  {/* passing in todos as prop */}
      </div>  
    )
  }
}

export default App;
