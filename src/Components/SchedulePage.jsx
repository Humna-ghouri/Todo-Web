// // src/SchedulePage.js
// // src/Components/SchedulePage.jsx
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTask, editTask, deleteTask } from './features/tasksSlice'; // Adjusted import path
// import Swal from 'sweetalert2';

// function SchedulePage() {
//     const tasks = useSelector((state) => state.tasks);
//     const dispatch = useDispatch();

//     const handleEdit = (task) => {
//         Swal.fire({
//             title: 'Edit Task',
//             html: `
//                 <input id="title" class="swal2-input" placeholder="Title" value="${task.title}">
//                 <textarea id="description" class="swal2-input" placeholder="Description">${task.description}</textarea>
//                 <input id="time" class="swal2-input" type="time" value="${task.time}">
//             `,
//             focusConfirm: false,
//             preConfirm: () => {
//                 const title = document.getElementById('title').value;
//                 const description = document.getElementById('description').value;
//                 const time = document.getElementById('time').value;
//                 dispatch(editTask({ id: task.id, updatedTask: { title, description, time } }));
//             }
//         });
//     };

//     return (
//         <div>
//             <h1>Schedule</h1>
//             {tasks.map((task) => (
//                 <div key={task.id}>
//                     <h2>{task.title} <span>{task.category}</span></h2>
//                     <p>{task.description}</p>
//                     <p>{task.time}</p>
//                     <button onClick={() => handleEdit(task)}>Edit</button>
//                     <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
//                     <button onClick={() => dispatch(toggleTask(task.id))}>
//                         {task.completed ? 'Undo' : 'Done'}
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default SchedulePage;
// src/Components/SchedulePage.jsx
// src/Components/SchedulePage.jsx
// src/Components/SchedulePage.jsx
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTask, toggleTask } from './features/tasksSlice';
// import Swal from 'sweetalert2';
// // import './SchedulePage.css'; // Import your CSS for styling

// function SchedulePage() {
//     const tasks = useSelector((state) => state.tasks);
//     const dispatch = useDispatch();

//     const categories = ['all', 'work', 'gaming', 'study', 'shopping', 'music', 'home', 'travel', 'market'];

//     const handleDelete = (id) => {
//         dispatch(deleteTask(id));
//         Swal.fire('Task deleted!', '', 'success');
//         updateLocalStorageAfterDelete(id);
//     };

//     const updateLocalStorageAfterDelete = (id) => {
//         const currentTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         const updatedTasks = currentTasks.filter(task => task.id !== id);
//         localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//     };

//     const handleToggle = (id) => {
//         dispatch(toggleTask(id));
//     };
//     const newTask = { id: uuidv4(), title, category, completed: false };

//     return (
//         <div className="container mt-4">
//             <h1>Schedule</h1>
//             <div className="row">
//                 {categories.map((category) => (
//                     <div className="col-md-4 mb-4" key={category}>
//                         <div className="card">
//                             <div className="card-header">
//                                 <h5>{category.charAt(0).toUpperCase() + category.slice(1)}</h5>
//                             </div>
//                             <div className="card-body">
//                                 {tasks
//                                     .filter(task => category === 'all' || task.category === category)
//                                     .map(task => (
//                                         <div key={task.id} className="task-item">
//                                             <h6>{task.title}</h6>
//                                             <button onClick={() => handleToggle(task.id)}>
//                                                 {task.completed ? 'Undo' : 'Done'}
//                                             </button>
//                                             <button onClick={() => handleDelete(task.id)}>Delete</button>
//                                         </div>
//                                     ))}
//                                 {tasks.filter(task => category === 'all' || task.category === category).length === 0 && (
//                                     <p>No tasks available in this category.</p>
                                    
//                                 )
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )};
// export default SchedulePage;
// src/Components/SchedulePage.jsx
// import React from 'react';
// // import './SchedulePage.css'; // Import your CSS for styling

// function SchedulePage() {
//     const categories = ['All', 'Work', 'Gaming', 'Study', 'Shopping', 'Music', 'Home', 'Travel', 'Market'];

//     return (
//         <div className="container mt-4">
//             <h1>Schedule</h1>
//             <div className="row">
//                 {categories.map((category) => (
//                     <div className="col-md-4 mb-4" key={category}>
//                         <div className="card">
//                             <div className="card-header">
//                                 <h5>{category}</h5>
//                             </div>
//                             <div className="card-body">
//                                 <p>No tasks available in this category.</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default SchedulePage;
// src/Components/SchedulePage.jsx
// import React, { useEffect, useState } from 'react';
// // import './SchedulePage.css'; // Import your CSS for styling

// function SchedulePage() {
//     const [tasks, setTasks] = useState([]);
//     const categories = ['All', 'Work', 'Gaming', 'Study', 'Shopping', 'Music', 'Home', 'Travel', 'Market'];

//     // Load tasks from local storage when the component mounts
//     useEffect(() => {
//         const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         setTasks(savedTasks);
//     }, []);

//     return (
//         <div className="container mt-4">
//             <h1>Schedule</h1>
//             <div className="row">
//                 {categories.map((category) => (
//                     <div className="col-md-4 mb-4" key={category}>
//                         <div className="card">
//                             <div className="card-header">
//                                 <h5>{category}</h5>
//                             </div>
//                             <div className="card-body">
//                                 {tasks
//                                     .filter(task => category === 'All' || task.category === category.toLowerCase())
//                                     .map(task => (
//                                         <div key={task.id} className="task-item">
//                                             <h6>{task.title}</h6>
//                                         </div>
//                                     ))}
//                                 {tasks.filter(task => category === 'All' || task.category === category.toLowerCase()).length === 0 && (
//                                     <p>No tasks available in this category.</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default SchedulePage;
// src/Components/SchedulePage.jsx
// 
// import React, { useEffect, useState } from 'react';

// function SchedulePage() {
//     const [tasks, setTasks] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category
//     const categories = ['All', 'Work', 'Gaming', 'Study', 'Shopping', 'Music', 'Home', 'Travel', 'Market'];

//     // Load tasks from local storage when the component mounts
//     useEffect(() => {
//         const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         setTasks(savedTasks);
//     }, []);

//     const handleCategoryClick = (category) => {
//         setSelectedCategory(category); // Update the selected category
//     };

//     const handleEdit = (id) => {
//         const taskToEdit = tasks.find(task => task.id === id);
//         const newTitle = prompt("Edit task title:", taskToEdit.title);
//         const newDescription = prompt("Edit task description:", taskToEdit.description);
//         if (newTitle) {
//             const updatedTasks = tasks.map(task => 
//                 task.id === id ? { ...task, title: newTitle, description: newDescription } : task
//             );
//             setTasks(updatedTasks);
//             localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//         }
//     };

//     const handleDelete = (id) => {
//         const updatedTasks = tasks.filter(task => task.id !== id);
//         setTasks(updatedTasks);
//         localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//     };

//     const handleMarkDone = (id) => {
//         const updatedTasks = tasks.map(task => 
//             task.id === id ? { ...task, completed: !task.completed } : task
//         );
//         setTasks(updatedTasks);
//         localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//     };

//     return (
//         <div className="container mt-4">
//             <h1>Schedule</h1>

//             {/* Display tasks for the selected category at the top */}
//             {selectedCategory && (
//                 <div className="task-display">
//                     <h2>Tasks for {selectedCategory}</h2>
//                     <div className="task-list">
//                         {tasks
//                             .filter(task => selectedCategory === 'All' || task.category === selectedCategory.toLowerCase())
//                             .map(task => (
//                                 <div key={task.id} className="task-item card mb-3">
//                                     <div className="card-body">
//                                         <h6>{task.title}</h6>
//                                         <p>{task.description}</p> {/* Display task description */}
//                                         <p><strong>Time:</strong> {task.time}</p> {/* Display task time */}
//                                         <button className="btn btn-warning" onClick={() => handleEdit(task.id)}>Edit</button>
//                                         <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
//                                         <button className="btn btn-success" onClick={() => handleMarkDone(task.id)}>
//                                             {task.completed ? 'Undo' : 'Done'}
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         {tasks.filter(task => selectedCategory === 'All' || task.category === selectedCategory.toLowerCase()).length === 0 && (
//                             <p>No tasks available in this category.</p>
//                         )}
//                     </div>
//                 </div>
//             )}

//             <div className="row">
//                 {categories.map((category) => (
//                     <div className="col-md-4 mb-4" key={category}>
//                         <div className="card" onClick={() => handleCategoryClick(category)}>
//                             <div className="card-header">
//                                 <h5>{category}</h5>
//                                 <p>{tasks.filter(task => category === 'All' || task.category === category.toLowerCase()).length} tasks</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default SchedulePage;
// src/Components/SchedulePage.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTasks, editTask, deleteTask, toggleTask } from './features/tasksSlice';

function SchedulePage() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks) || []; // Ensure tasks is an array
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const categories = ['All', 'Work', 'Gaming', 'Study', 'Shopping', 'Music', 'Home', 'Travel', 'Market'];

    // Load tasks from local storage when the component mounts
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        if (Array.isArray(savedTasks)) {
            dispatch(setTasks(savedTasks)); // Set tasks in Redux store
        }
    }, [dispatch]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleEdit = (id) => {
        const taskToEdit = tasks.find(task => task.id === id);
        const newTitle = prompt("Edit task title:", taskToEdit.title);
        const newDescription = prompt("Edit task description:", taskToEdit.description);
        if (newTitle) {
            dispatch(editTask({ id, title: newTitle, description: newDescription }));
            localStorage.setItem('tasks', JSON.stringify(tasks.map(task => 
                task.id === id ? { ...task, title: newTitle, description: newDescription } : task
            )));
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
        localStorage.setItem('tasks', JSON.stringify(tasks.filter(task => task.id !== id)));
    };

    const handleMarkDone = (id) => {
        dispatch(toggleTask(id));
        localStorage.setItem('tasks', JSON.stringify(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        )));
    };

    return (
        <div className="container mt-4">
            <h1>Schedule</h1>

            {/* Display tasks for the selected category at the top */}
            {selectedCategory && (
                <div className="task-display">
                    <h2>Tasks for {selectedCategory}</h2>
                    <div className="task-list">
                        {tasks
                            .filter(task => selectedCategory === 'All' || task.category === selectedCategory.toLowerCase())
                            .map(task => (
                                <div key={task.id} className="task-item card mb-3">
                                    <div className="card-body">
                                        <h6>{task.title}</h6>
                                        <p>{task.description}</p>
                                        <p><strong>Time:</strong> {task.time}</p>
                                        <button className="btn btn-warning" onClick={() => handleEdit(task.id)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
                                        <button className="btn btn-success" onClick={() => handleMarkDone(task.id)}>
                                            {task.completed ? 'Undo' : 'Done'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        {tasks.filter(task => selectedCategory === 'All' || task.category === selectedCategory.toLowerCase()).length === 0 && (
                            <p>No tasks available in this category.</p>
                        )}
                    </div>
                </div>
            )}

            <div className="row">
                {categories.map((category) => (
                    <div className="col-md-4 mb-4" key={category}>
                        <div className="card" onClick={() => handleCategoryClick(category)}>
                            <div className="card-header">
                                <h5>{category}</h5>
                                <p>{tasks.filter(task => category === 'All' || task.category === category.toLowerCase()).length} tasks</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SchedulePage;