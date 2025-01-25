// // src/Components/TaskPage.jsx
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from './features/tasksSlice'; // Adjusted import path
// import { v4 as uuidv4 } from 'uuid';

// function TaskPage() {
//     const dispatch = useDispatch();
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [time, setTime] = useState('');
//     const [category, setCategory] = useState('work');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(addTask({ id: uuidv4(), title, description, time, category, completed: false }));
//         // Clear the form
//         setTitle('');
//         setDescription('');
//         setTime('');
//         setCategory('work');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
//             <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
//             <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
//             <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                 <option value="work">Work</option>
//                 <option value="gaming">Gaming</option>
//                 <option value="study">Study</option>
//                 <option value="shopping">Shopping</option>
//                 <option value="music">Music</option>
//                 <option value="home">Home</option>
//                 <option value="travel">Travel</option>
//                 <option value="market">Market</option>
//                 <option value="other">Other</option>
//             </select>
//             <button type="submit">Add Task</button>
//         </form>
//     );
// }

// export default TaskPage;
// src/Components/TaskPage.jsx
// src/Components/TaskPage.jsx
// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from './features/tasksSlice';
// import Swal from 'sweetalert2';
// import { v4 as uuidv4 } from 'uuid';

// function TaskPage() {
//     const dispatch = useDispatch();
//     const [title, setTitle] = useState('');
//     const [category, setCategory] = useState('work');

//     // Load tasks from local storage when the component mounts
//     useEffect(() => {
//         const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         savedTasks.forEach(task => {
//             dispatch(addTask(task)); // Add each task to the Redux store
//         });
//     }, [dispatch]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newTask = { id: uuidv4(), title, category, completed: false };
//         dispatch(addTask(newTask));
//         Swal.fire('Task added!', '', 'success'); // SweetAlert for task addition

//         // Save the updated tasks to local storage
//         saveTasksToLocalStorage(newTask);

//         setTitle('');
//         setCategory('work');
//     };

//     const saveTasksToLocalStorage = (newTask) => {
//         const currentTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         currentTasks.push(newTask);
//         localStorage.setItem('tasks', JSON.stringify(currentTasks));
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Task Title"
//                 required
//             />
//             <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                 <option value="work">Work</option>
//                 <option value="gaming">Gaming</option>
//                 <option value="study">Study</option>
//                 <option value="shopping">Shopping</option>
//                 <option value="music">Music</option>
//                 <option value="home">Home</option>
//                 <option value="travel">Travel</option>
//                 <option value="market">Market</option>
//             </select>
//             <button type="submit">Add Task</button>
//         </form>
//     );
// }

// export default TaskPage;
// src/Components/TaskPage.jsx
// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from './features/tasksSlice';
// import Swal from 'sweetalert2';
// import { v4 as uuidv4 } from 'uuid';

// function TaskPage() {
//     const dispatch = useDispatch();
//     const [title, setTitle] = useState('');
//     const [category, setCategory] = useState('work');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newTask = { id: uuidv4(), title, category: category.toLowerCase(), completed: false }; // Store category in lowercase
//         dispatch(addTask(newTask));
//         Swal.fire('Task added!', '', 'success'); // SweetAlert for task addition

//         // Save the updated tasks to local storage
//         saveTasksToLocalStorage(newTask);

//         setTitle('');
//         setCategory('work');
//     };

//     const saveTasksToLocalStorage = (newTask) => {
//         const currentTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         currentTasks.push(newTask);
//         localStorage.setItem('tasks', JSON.stringify(currentTasks));
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Task Title"
//                 required
//             />
//             <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                 <option value="work">Work</option>
//                 <option value="gaming">Gaming</option>
//                 <option value="study">Study</option>
//                 <option value="shopping">Shopping</option>
//                 <option value="music">Music</option>
//                 <option value="home">Home</option>
//                 <option value="travel">Travel</option>
//                 <option value="market">Market</option>
//             </select>
//             <button type="submit">Add Task</button>
//         </form>
//     );
// }

// export default TaskPage;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './features/tasksSlice';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function TaskPage() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(''); // New state for description
    const [category, setCategory] = useState('work');
    const [time, setTime] = useState(''); // New state for time

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            title,
            description,
            category: category.toLowerCase(),
            completed: false,
            time // Include time in the task object
        };
        dispatch(addTask(newTask));
        Swal.fire('Task added!', '', 'success');

        // Save the updated tasks to local storage
        saveTasksToLocalStorage(newTask);

        // Reset form fields
        setTitle('');
        setDescription('');
        setCategory('work');
        setTime('');
    };

    const saveTasksToLocalStorage = (newTask) => {
        const currentTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        currentTasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(currentTasks));
    };

    return (
        <div className="container mt-4">
            <h2>Add a New Task</h2>
            <form onSubmit={handleSubmit} className="form-group">
                <input
                    type="text"
                    className="form-control mb-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task Title"
                    required
                />
                <textarea
                    className="form-control mb-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task Description"
                    required
                />
                <select
                    className="form-control mb-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="work">Work</option>
                    <option value="gaming">Gaming</option>
                    <option value="study">Study</option>
                    <option value="shopping">Shopping</option>
                    <option value="music">Music</option>
                    <option value="home">Home</option>
                    <option value="travel">Travel</option>
                    <option value="market">Market</option>
                </select>
                <input
                    type="time"
                    className="form-control mb-2"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
                <button type="submit" className="btn btn-primary">Add Task</button>
            </form>
        </div>
    );
}

export default TaskPage;