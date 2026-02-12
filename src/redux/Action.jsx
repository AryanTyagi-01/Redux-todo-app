export const ADD_TODO = 'ADD_TODO'; 
export const REMOVE_TODO = 'REMOVE_TODO'; 
export const UPDATE_TODO = 'UPDATE_TODO'; 
 
export const addTodo = (task) => ({ 
 type: ADD_TODO, 
  payload: task, 
}); 
 
export const removeTodo = (index) => ({ 
  type: REMOVE_TODO, 
  payload: index, 
}); 
 
export const updateTodo = (index, newTask) => ({ 
  type: UPDATE_TODO, 
  payload: { index, newTask }, 
});