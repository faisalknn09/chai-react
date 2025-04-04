import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // The initial state of the todo slice
    // This is where you can define the initial state of your todos
  todos: [{id: 1, text: 'Learn Redux Toolkit'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // Reducers are functions that take the current state and an action as arguments
        addTodo: (state, action) => {
            const todo = {
                id: Date.now(),
                text: action.payload
            }
        state.todos.push(todo)
        },
        removeTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
    })
    // The actions are the functions that will be called when the user interacts with the app
    export const { addTodo, removeTodo } = todoSlice.actions
    export default todoSlice.reducer
    // The reducer is the function that will be called when the state changes
    // The reducer will be used in the store to update the state