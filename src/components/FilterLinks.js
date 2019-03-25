import React from'react';
import constants from '../constants';
let ALL = constants.ALL;
let ACTIVE = constants.ACTIVE;
let COMPLETED = constants.COMPLETED;

class FilterLinks extends React.Component {

    render(){
        return (
            <div>
            <div className="todo-app__total mobileView">
                <ul className="list-group list-group-flush todo-app__list-group">
                <li className="list-group-item todo-app__list-group-item d-flex justify-content-between align-items-center">
                    <h6 className="todo-app__total-incomplete-number text-indicator"> {ALL} :  {this.props.todosCount }</h6>
                </li>
                <li className="list-group-item todo-app__list-group-item d-flex justify-content-between align-items-center">
                    <span className="indicator glyphicon glyphicon-exclamation-sign todo-app__total-incomplete-indicator" />
                    <h6 className="todo-app__total-incomplete-number text-indicator todo-app__total-incomplete-indicator">   {this.props.todosListCount[1]['incompleted']} {ACTIVE}</h6>
                </li>
                <li className="list-group-item todo-app__list-group-item d-flex justify-content-between align-items-center">
                     <span className="indicator glyphicon glyphicon-ok todo-app__total-complete-indicator" />
                     <h6 className="todo-app__total-incomplete-number text-indicator todo-app__total-complete-indicator">   {this.props.todosListCount[0]['completed']} {COMPLETED}</h6>
                </li>
                {this.props.todosListCount[0]['completed'] > 0  ?
                 <li className="list-group-item todo-app__list-group-item d-flex justify-content-between align-items-center" onClick={this.props.onDeleteAllBtnClick}>
                     <span className="indicator todo-app__remove-total-completed-item" />
                     <h6 className="todo-app__total-incomplete-number text-indicator todo-app__total-remove-indicator">  Remove {this.props.todosListCount[0]['completed']} selected</h6>
                 </li> : null }
                </ul>
            </div>
            <div className="todo-app__total desktopView">
                <div className="col-4">
                    <h6 className="todo-app__total-incomplete-number"> {ALL} :  {this.props.todosCount }</h6>
                </div>
                <div className="col-4 todo-app__total-incomplete-indicator">
                    <span className="indicator glyphicon glyphicon-exclamation-sign" />
                    <h6 className="todo-app__total-incomplete-number">   {this.props.todosListCount[1]['incompleted']} {ACTIVE}</h6>
                </div>
                <div className="col-4 todo-app__total-complete-indicator">
                    <span className="indicator glyphicon glyphicon-ok" />
                    <h6 className="todo-app__total-incomplete-number">   {this.props.todosListCount[0]['completed']} {COMPLETED}</h6>
                </div>
                {this.props.todosListCount[0]['completed'] > 0  ?
                <div className="col-4">
                    <span className="todo-app__total-complete-indicator" />
                    <h6 className="todo-app__remove-total-completed-item todo-app__total-remove-indicator" onClick={this.props.onDeleteAllBtnClick} >
                       Remove {this.props.todosListCount[0]['completed']} selected
                    </h6>
                </div> : null }
            </div>
            </div>
        )
    }
}

export default FilterLinks;
