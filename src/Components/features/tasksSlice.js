// // src/Components/features/tasksSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const tasksSlice = createSlice({
//     name: 'tasks',
//     initialState: [],
//     reducers: {
//         addTask: (state, action) => {
//             state.push(action.payload);
//         },
//         editTask: (state, action) => {
//             const { id, updatedTask } = action.payload;
//             const index = state.findIndex(task => task.id === id);
//             if (index !== -1) {
//                 state[index] = { ...state[index], ...updatedTask };
//             }
//         },
//         deleteTask: (state, action) => {
//             return state.filter(task => task.id !== action.payload);
//         },
//         toggleTask: (state, action) => {
//             const task = state.find(task => task.id === action.payload);
//             if (task) {
//                 task.completed = !task.completed;
//             }
//         },
//     },
// });

// // export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
// // export default tasksSlice.reducer;
// // src/Components/features/tasksSlice.js
// // src/Components/features/tasksSlice.js
// // src/Components/features/tasksSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const tasksSlice = createSlice({
//     name: 'tasks',
//     initialState: [], // Ensure this is an empty array
//     reducers: {
//         addTask: (state, action) => {
//             // Check if state is an array before pushing
//             if (Array.isArray(state)) {
//                 state.push(action.payload); // This should work if state is an array
//             } else {
//                 console.error('State is not an array:', state);
//             }
//         },
//         editTask: (state, action) => {
//             const { id, updatedTask } = action.payload;
//             const index = state.findIndex(task => task.id === id);
//             if (index !== -1) {
//                 state[index] = { ...state[index], ...updatedTask };
//             }
//         },
//         deleteTask: (state, action) => {
//             return state.filter(task => task.id !== action.payload);
//         },
//         toggleTask: (state, action) => {
//             const task = state.find(task => task.id === action.payload);
//             if (task) {
//                 task.completed = !task.completed;
//             }
//         },
//     },
// });

// export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
// export default tasksSlice.reducer;
// features/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        setTasks: (state, action) => {
            return action.payload;
        },
        addTask: (state, action) => {
            state.push(action.payload);
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const task = state.find(task => task.id === id);
            if (task) {
                task.title = title;
                task.description = description;
            }
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
});

export const { setTasks, addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;