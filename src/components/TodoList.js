import React from 'react';
import TodoItem from './TodoItem';

let TodoList = (props)=> {
  let todoList = [];
  let todos = props.todos;
  for (let i = 0; i < todos.length; ++i) {
    todoList.push(
      <TodoItem
        key={todos[i].id}
        todoItem={todos[i]}
        onDeleteBtnClick={props.onDeleteBtnClick}
        onCheckboxClick={props.onCheckboxClick}
      />
    );
  }

  return (
      <div className="todo-app__todo-list">
          {todoList}
      </div>
  );
};

export default TodoList;
