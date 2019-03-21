import React from'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputTextChangeEvt = this.handleInputTextChangeEvt.bind(this);
    this.handleRefInputEvt = this.handleRefInputEvt.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    this.props.onNewTodoItem();
  }

  handleInputTextChangeEvt(evt) {
    if (evt.key === 'Enter'){
      this.props.onNewTodoItem();
    }else{
      let todoText = evt.target.value;
      this.props.onValueChange(todoText);
    }
  }

  handleRefInputEvt(inputRef) {
    inputRef.focus();
  }

  render() {
    return (
        <div className='todo-app__content'>
          <h3 className="todo-app__title">To-Do App!</h3>
          <div className="todo-app__label">Add New To-Do</div>
      <div className="input-group todo-app__input-group mb-3">
        <input
          type="text"
          className="form-control todo-app__input"
          placeholder="Type to search or enter to add todo"
          ref={this.handleRefInputEvt}
          value={this.props.todoText}
          onChange={this.handleInputTextChangeEvt}
          autoFocus={true}
          onKeyPress={this.handleInputTextChangeEvt}
        />
      </div>
        <button className='btn btn-primary todo-app__button' onClick={this.handleFormSubmit}>
          Add
        </button>
       </div>
    );
  }
}

export default TodoForm;
