import {connect} from 'react-redux'
import AddTodo from "../component/AddTodo";
import {addTodo} from "../action";
import todosAPI from "../api/TodoResourseAPI"
import Todo from '../model/Todo';

const mapStateToProps = (state, ownProps) =>{
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        addHandler:(content) => {
            const todo = new Todo(content);
            //todosAPI.add(todo,dispatch,addTodo);
            todosAPI.add(todo,()=>{dispatch(addTodo)})
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)