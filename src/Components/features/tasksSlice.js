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
// import { createSlice } from '@reduxjs/toolkit';

// const tasksSlice = createSlice({
//     name: 'tasks',
//     initialState: [],
//     reducers: {
//         setTasks: (state, action) => {
//             return action.payload;
//         },
//         addTask: (state, action) => {
//             state.push(action.payload);
//         },
//         editTask: (state, action) => {
//             const { id, title, description } = action.payload;
//             const task = state.find(task => task.id === id);
//             if (task) {
//                 task.title = title;
//                 task.description = description;
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

// export const { setTasks, addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
// export default tasksSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';

// const tasksSlice = createSlice({
//     name: 'tasks',
//     initialState: [], // Ensure this is always an array
//     reducers: {
//         setTasks: (state, action) => {
//             // Ensure payload is an array
//             return Array.isArray(action.payload) ? action.payload : [];
//         },
//         addTask: (state, action) => {
//             // Ensure state is an array before using spread operator
//             return Array.isArray(state) ? [...state, action.payload] : [action.payload];
//         },
//         editTask: (state, action) => {
//             const { id, title, description } = action.payload;
//             const task = state.find(task => task.id === id);
//             if (task) {
//                 task.title = title;
//                 task.description = description;
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
//             useEffect(() => {
//                 const savedTasks = JSON.parse(localStorage.getItem('tasks'));
//                 if (Array.isArray(savedTasks)) {
//                     dispatch(setTasks(savedTasks));
//                 } else {
//                     dispatch(setTasks([])); // Reset to empty array if data is not valid
//                 }
//             }, [dispatch]);
//         },
//     },
// });

// export const { setTasks, addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
// export default tasksSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: [],
//   reducers: {
//     initializeTasks: (state, action) => action.payload,
//     deleteTask: (state, action) =>
//       state.filter((task) => task.id !== action.payload),
//     editTask: (state, action) =>
//       state.map((task) =>
//         task.id === action.payload.id ? { ...task, ...action.payload } : task
//       ),
//     markTaskDone: (state, action) =>
//       state.map((task) =>
//         task.id === action.payload ? { ...task, done: true } : task
//       ),
//     addTask: (state, action) => {
//       state.push(action.payload); // Add the new task to the state
//     },
//   },
// });

// export const { initializeTasks, deleteTask, editTask, markTaskDone, addTask } =
//   tasksSlice.actions;

// export default tasksSlice.reducer;
// src/redux/taskSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     tasks: [], // Array to store tasks
// };

// const taskSlice = createSlice({
//     name: 'tasks',
//     initialState,
//     reducers: {
//         addTask: (state, action) => {
//             state.tasks.push(action.payload);
//         },
//         editTask: (state, action) => {
//             const { id, updatedTask } = action.payload;
//             const index = state.tasks.findIndex(task => task.id === id);
//             if (index !== -1) state.tasks[index] = updatedTask;
//         },
//         deleteTask: (state, action) => {
//             state.tasks = state.tasks.filter(task => task.id !== action.payload);
//         },
//         toggleTaskDone: (state, action) => {
//             const index = state.tasks.findIndex(task => task.id === action.payload);
//             if (index !== -1) state.tasks[index].done = !state.tasks[index].done;
//         },
//     },
// });

// export const { addTask, editTask, deleteTask, toggleTaskDone } = taskSlice.actions;
// export default taskSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

// Load tasks from local storage
const loadFromLocalStorage = () => {
    try {
        const serializedTasks = localStorage.getItem('tasks');
        if (serializedTasks === null) {
            return []; // Return an empty array if no tasks are saved
        }
        return JSON.parse(serializedTasks); // Parse and return tasks
    } catch (err) {
        console.error('Could not load tasks from localStorage', err);
        return [];
    }
};

// Save tasks to local storage
const saveToLocalStorage = (tasks) => {
    try {
        const serializedTasks = JSON.stringify(tasks);
        localStorage.setItem('tasks', serializedTasks);
    } catch (err) {
        console.error('Could not save tasks to localStorage', err);
    }
};

// Redux slice
const taskSlice = createSlice({
    name: 'tasks',
    initialState: loadFromLocalStorage(), // Load initial state from local storage
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            saveToLocalStorage(state); // Save updated state to local storage
        },
        editTask: (state, action) => {
            const { id, updatedTask } = action.payload;
            const index = state.findIndex((task) => task.id === id);
            if (index !== -1) {
                state[index] = updatedTask;
                saveToLocalStorage(state); // Save updated state to local storage
            }
        },
        deleteTask: (state, action) => {
            const updatedState = state.filter((task) => task.id !== action.payload);
            saveToLocalStorage(updatedState); // Save updated state to local storage
            return updatedState; // Return the updated state
        },
        toggleTaskDone: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload);
            if (index !== -1) {
                state[index].done = !state[index].done;
                saveToLocalStorage(state); // Save updated state to local storage
            }
        },
    },
});

export const { addTask, editTask, deleteTask, toggleTaskDone } = taskSlice.actions;
export default taskSlice.reducer;
