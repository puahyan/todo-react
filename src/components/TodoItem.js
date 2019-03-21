import React from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let TodoItem = (props) => {
  let todoItem = props.todoItem;
  return (
      <ul className="list-group list-group-flush todo-app__list-group">
        <li className="list-group-item todo-app__list-group-item d-flex justify-content-between align-items-center">
          <div className="form-group todo-app__form-group">
            <label className="custom-control custom-checkbox todo-app__list-label todo-app__list-label-completed">
              <input
                  className="custom-control-input todo-app__checkbox"
                  type="checkbox"
                  checked={todoItem.completed}
                  value={todoItem.id}
                  onChange={props.onCheckboxClick}
              />
                <span className="custom-control-label" style={{
                  textDecoration: todoItem.completed ? 'line-through' : 'none'
                }}>
                  {todoItem.todo}</span>
              </label>
          </div>
          <div title="Remove">
            <button className="btn btn-default btn-danger pull-right" onClick={props.onDeleteBtnClick} value={todoItem.id}>
              Delete
            </button>
          </div>
        </li>
      </ul>

  );
};

export default TodoItem;
