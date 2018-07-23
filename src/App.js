import React, {Component} from 'react';
import './todo.css';
import Header from './component/Header'
import AddTodo from './container/AddTodoContainer'
import Todos from './container/TodosContainer'
import FilterTodo from './container/FilterTodoContainer'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <Router>
            <div className="container">
                <Header />
                <AddTodo />
                {/* <Todos /> */}
                <Route exact path="/" component={Todos}></Route>
                <Route  path="/:status" component={Todos}></Route>
                <FilterTodo /> 
            </div>
            </Router>
            );
    }
}

export default App;
