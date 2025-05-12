// 3.
import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, UPDATE_TODO, CLEAR_ALL, CANCEL_EDIT } from "./constant"
const initState ={
    todos:[],
    todoInput: '',
}

function reducer(state, action){
    switch(action.type){
        case SET_TODO_INPUT:
            return{
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            const newTodo = [...state.todos]
            newTodo.splice(action.payload,1)
            return{
                ...state,
                todos: newTodo
            }
        case UPDATE_TODO:
            const updateTodo = [...state.todos];
            updateTodo.splice(action.index, 1, action.payload)
            return{
                ...state,
                todos: updateTodo
            }
        case CLEAR_ALL:
            localStorage.removeItem("TodosContext");
            return {
                ...state,
                todos: [], // set lại state todos là mảng rỗng
            };
        case CANCEL_EDIT:
                return state;
        default:
            throw new Error('Invalid Action')

    }
}
export {initState}
export default reducer