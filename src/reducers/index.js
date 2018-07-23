export default  (state = [], action) => { 
    switch (action.type) {
        case 'ADD_TODO':{       
            let newState = JSON.parse(JSON.stringify(state));
            newState = [...action.todos];
            return newState
        }
        case 'TOGGLE_TODO':{     
            let newState = JSON.parse(JSON.stringify(state));
            newState = [...action.todos];  
            return newState
        }
        case 'CHANGE_TODO': {      
            let newState = JSON.parse(JSON.stringify(state));
            newState = [...action.todos];   
            return newState
        }
        case 'FILTER_TODO': {      
            let newState = JSON.parse(JSON.stringify(state));
            newState = [...action.todos];  
            return newState
        }
        default:
            return state
    }
}

