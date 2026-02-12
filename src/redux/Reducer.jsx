import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './Action'; 
 
const initialState = { 
  todos: [], 
}; 
 
export const todoReducer = (state = initialState, action) => { 
  switch (action.type) { 
    case ADD_TODO: 
      return { ...state, todos: [...state.todos, action.payload] }; 
 
    case REMOVE_TODO: 
      return { 
        ...state, 
        todos: state.todos.filter((_, idx) => idx !== action.payload), 
      }; 
 
    case UPDATE_TODO: 
      const updatedTodos = [...state.todos]; 
      updatedTodos[action.payload.index] = action.payload.newTask; 
      return { 
        ...state, 
        todos: updatedTodos, 
      }; 
 
    default: return state; 
  } 
}; 
