import {connect} from 'react-redux'
import Todos from "../component/Todos";
import {changeCheck, changeContent} from "../action";
import todosAPI from "../api/TodoResourseAPI"

const isFiltered = (todo,status) =>{
    if(status === undefined) return true;
    return todo.status === status;
}


const mapStateToProps = (state, ownProps) =>{
    const todos = [...state];
    const {match:{params:{status}}} = ownProps
    console.log(status)
    todosAPI.filter = status
    console.log(todosAPI.filter)
    if(todos != null){
    const currentTodos = todos.filter(todo=>isFiltered(todo,status))
    console.log(currentTodos)
    return {
        todos: currentTodos,
    }
}
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        toggleActiveHandler:(viewId,status) => {
            let newStatus = '';
            if(status === 'active'){
                newStatus = 'completed';
            }else{
                newStatus = 'active';
            }
            todosAPI.toggleActive(viewId,newStatus,dispatch,changeCheck);
        },
        updateItemContent:(viewId,content) => {
            todosAPI.updateItemContent(viewId,content,dispatch,changeContent);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos)