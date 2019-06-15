import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const todos = [
  {
    task: 'pick up kids',
    id: 80110314,
    completed: false
  },
  {
    task: 'turn in report',
    id: 93016112,
    completed: false
  },
  {
    task: 'remind dad about vacation',
    id: 25855911,
    completed: false
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  };
  // This was a Lambda School Project for Class Componenets II
  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      complete: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div className="App">
      <div className="header">
        <h1>TaskTrack.</h1>
        <TodoForm addTodo={this.addTodo} />
        </div>
        <section className='app-info'>
          <h3 className="tag-line">Track Tasks Fast @TaskTrack.</h3>
        </section>
        <TodoList 
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
        <section className='app-credit'>
        <p>Github: @myke47
        <a href="https://github.com/myke47" text="Github: @myke47" target="_blank" rel="noopener noreferrer"></a>
        </p>

        </section>
        <footer>
        <p>React App Project</p>
        </footer>
      </div>
    );
  }
}

export default App;
