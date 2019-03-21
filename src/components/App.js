import React from "react";
import Todo from './Todo';

export default class App extends React.Component {
    render() {
       return (
        <div className="container-fluid todo-app">
            <div className="row todo-app__row">
          <Todo />
            </div>
        </div>
     );
    }
}
