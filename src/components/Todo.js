import React from 'react'
import TodoForm from './TodoForm';
import FilterLinks from './FilterLinks';
import TodoList from './TodoList';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    let persistedTodos = JSON.parse(localStorage.getItem('todo-app') || '[]');
    this.state = {
      inputTaskValue: '',
      todos: persistedTodos
    };
    this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
    this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
    this.handleDeleteBtnAllClick = this.handleDeleteBtnAllClick.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleInputChange= this.handleInputChange.bind(this);
  }

  handleNewTodoItem() {
    if (this.state.inputTaskValue === undefined || this.state.inputTaskValue === null || this.state.inputTaskValue === '') {
      alert('Please enter a task here !')
      return 0;
    }
    this.setState(function (prevState) {
        let todoItem = {
          todo: prevState.inputTaskValue,
          id: Date.now().toString(),
          completed: false
        };
        let todos = prevState.todos.concat(todoItem);
        localStorage.setItem('todo-app', JSON.stringify(todos));
        return {
          todos: todos,
          inputTaskValue: ''
        };
    });
  }

  handleDeleteBtnClick(evt) {
    let id = evt.target.value;
    this.setState(function(prevState) {
      let todos = prevState.todos;
      for (var i = 0; i < todos.length; ++i) {
          if (todos[i].id === id) {
            todos.splice(i, 1);
          }
      }
      localStorage.setItem('todo-app', JSON.stringify(todos));
      return {
        todos: todos
      };
    });
  }

  handleDeleteBtnAllClick() {
    let getallSelected = this.getCompleted();
      this.setState(function(prevState) {
        let todos = prevState.todos;
        for (var i = 0; i < todos.length; ++i) {
          getallSelected.forEach(function(item) {
            if (todos[i].id === item.id) {
              todos.splice(i, 1);
            }
          });
        }
        localStorage.setItem('todo-app', JSON.stringify(todos));
        return {
          todos: todos
        };
      });
  }

  handleCheckboxClick(evt) {
    let id = evt.target.value;
    this.setState(function(prevState) {
      let todos = prevState.todos;
      let index = null;
      for (let i = 0; i < todos.length; ++i) {
        if (todos[i].id === id) {
          index = i;
          break;
        }
      }

      todos = (
        todos.slice(0, index).concat([{
            todo: todos[index].todo,
            id: todos[index].id,
            completed: !todos[index].completed
          }]).concat(todos.slice(index + 1))
      );
      localStorage.setItem('todo-app', JSON.stringify(todos));
      return {
        todos: todos
      };
    });
  }

  handleInputChange(inputTaskValue) {
    this.setState(function() {
      return {
        inputTaskValue: inputTaskValue
      };
    });
  }

  getCompleted(){
    return this.state.todos.filter(task => {
      return task.completed === true;
    });
  }

  getInCompleted(){
    return this.state.todos.filter(task => {
      return task.completed === false;
    });
  }

  render() {
    let todos = this.state.todos;
    let todoListCount = [
      {'completed':this.getCompleted().length},
      {'incompleted':this.getInCompleted().length}
    ];

    return (
      <div className="todo-app__column">
        <TodoForm
          todoText={this.state.inputTaskValue}
          onNewTodoItem={this.handleNewTodoItem}
          onValueChange={this.handleInputChange}
        />
      <div className="todo-app__content todo-app__contentResult">
        {todos.length > 0  ?
        <div className="todo-app__column-dispay">
            <FilterLinks
                todosCount={todos.length}
                todosListCount={todoListCount}
                onDeleteAllBtnClick ={this.handleDeleteBtnAllClick}
              />
            <TodoList
              todos={todos}
              onDeleteBtnClick={this.handleDeleteBtnClick}
              onCheckboxClick={this.handleCheckboxClick}
            />
          </div>
            : null }
         </div>
        </div>
    );
  }
}

export default Todo;
