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
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setTasks, editTask, deleteTask, toggleTask } from './features/tasksSlice';

// function SchedulePage() {
//     const dispatch = useDispatch();
//     const tasks = useSelector((state) => state.tasks) || []; // Ensure tasks is an array
//     const [selectedCategory, setSelectedCategory] = React.useState(null);
//     const categories = ['All', 'Work', 'Gaming', 'Study', 'Shopping', 'Music', 'Home', 'Travel', 'Market'];

//     // Load tasks from local storage when the component mounts
//     useEffect(() => {
//         const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         if (Array.isArray(savedTasks)) {
//             dispatch(setTasks(savedTasks)); // Set tasks in Redux store
//         }
//     }, [dispatch]);

//     const handleCategoryClick = (category) => {
//         setSelectedCategory(category);
//     };

//     const handleEdit = (id) => {
//         const taskToEdit = tasks.find(task => task.id === id);
//         const newTitle = prompt("Edit task title:", taskToEdit.title);
//         const newDescription = prompt("Edit task description:", taskToEdit.description);
//         if (newTitle) {
//             dispatch(editTask({ id, title: newTitle, description: newDescription }));
//             localStorage.setItem('tasks', JSON.stringify(tasks.map(task => 
//                 task.id === id ? { ...task, title: newTitle, description: newDescription } : task
//             )));
//         }
//     };

//     const handleDelete = (id) => {
//         dispatch(deleteTask(id));
//         localStorage.setItem('tasks', JSON.stringify(tasks.filter(task => task.id !== id)));
//     };

//     const handleMarkDone = (id) => {
//         dispatch(toggleTask(id));
//         localStorage.setItem('tasks', JSON.stringify(tasks.map(task => 
//             task.id === id ? { ...task, completed: !task.completed } : task
//         )));
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
//                                         <p>{task.description}</p>
//                                         <p><strong>Time:</strong> {task.time}</p>
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
// import React, { useEffect, useState } from "react";

// const SchedulePage = () => {
//   const [tasks, setTasks] = useState([]);

//   // Fetch tasks from localStorage when the component loads
//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     setTasks(storedTasks);
//   }, []);

//   // Group tasks by category
//   const groupTasksByCategory = () => {
//     return tasks.reduce((categories, task) => {
//       const { category } = task;
//       if (!categories[category]) {
//         categories[category] = [];
//       }
//       categories[category].push(task);
//       return categories;
//     }, {});
//   };

//   const categorizedTasks = groupTasksByCategory();

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1 style={{ color: "#333", textAlign: "center" }}>Scheduled Tasks</h1>
//       {Object.keys(categorizedTasks).length > 0 ? (
//         Object.entries(categorizedTasks).map(([category, tasks]) => (
//           <div key={category} style={{ marginBottom: "20px" }}>
//             <h2 style={{ color: "#4CAF50", textTransform: "capitalize" }}>
//               {category} Tasks
//             </h2>
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               {tasks.map((task) => (
//                 <li
//                   key={task.id}
//                   style={{
//                     padding: "10px",
//                     backgroundColor: "#f9f9f9",
//                     marginBottom: "10px",
//                     borderRadius: "5px",
//                     border: "1px solid #ddd",
//                   }}
//                 >
//                   {task.title}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))
//       ) : (
//         <p style={{ color: "#999", textAlign: "center" }}>
//           No tasks found in localStorage.
//         </p>
//       )}
//     </div>
//   );
// };

// export default SchedulePage;
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Swal from "sweetalert2";
// import { initializeTasks, deleteTask, editTask, markTaskDone } from "./features/tasksSlice.js"; // Import Redux actions

// const SchedulePage = () => {
//   const tasks = useSelector((state) => state.tasks); // Access tasks from Redux state
//   const dispatch = useDispatch();

//   // Fetch tasks from localStorage when the component loads
// //   useEffect(() => {
// //     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// //     dispatch(initializeTasks(storedTasks));
// //   }, [dispatch]);
//   useEffect(() => {
//     console.log("Tasks from Redux:", tasks); // Check the structure of tasks
//   }, [tasks]);
  

//   // Group tasks by category
// //   const groupTasksByCategory = () => {
// //     return tasks.reduce((categories, task) => {
// //       const { category } = task;
// //       if (!categories[category]) {
// //         categories[category] = [];
// //       }
// //       categories[category].push(task);
// //       return categories;
// //     }, {});
// //   };
// const groupTasksByCategory = () => {
//     if (!Array.isArray(tasks)) {
//       console.error("Tasks is not an array", tasks);
//       return {}; // Return an empty object if tasks is not an array
//     }
  
//     return tasks.reduce((categories, task) => {
//       const { category } = task;
//       if (!categories[category]) {
//         categories[category] = [];
//       }
//       categories[category].push(task);
//       return categories;
//     }, {});
//   };
  

//   const handleEdit = (task) => {
//     Swal.fire({
//       title: "Edit Task",
//       input: "text",
//       inputValue: task.title,
//       showCancelButton: true,
//       confirmButtonText: "Update",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         const updatedTask = { ...task, title: result.value };
//         dispatch(editTask(updatedTask));
//         Swal.fire("Updated!", "Your task has been updated.", "success");
//       }
//     });
//   };

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         dispatch(deleteTask(id));
//         Swal.fire("Deleted!", "Your task has been deleted.", "success");
//       }
//     });
//   };

//   const handleMarkDone = (task) => {
//     dispatch(markTaskDone(task.id));
//     Swal.fire("Done!", "Your task has been marked as done.", "success");
//   };

//   const categorizedTasks = groupTasksByCategory();

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1 style={{ color: "#333", textAlign: "center" }}>Scheduled Tasks</h1>
//       {Object.keys(categorizedTasks).length > 0 ? (
//         Object.entries(categorizedTasks).map(([category, tasks]) => (
//           <div key={category} style={{ marginBottom: "20px" }}>
//             <h2 style={{ color: "#4CAF50", textTransform: "capitalize" }}>
//               {category} Tasks
//             </h2>
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               {tasks.map((task) => (
//                 <li
//                   key={task.id}
//                   style={{
//                     padding: "10px",
//                     backgroundColor: task.done ? "#d4edda" : "#f9f9f9",
//                     marginBottom: "10px",
//                     borderRadius: "5px",
//                     border: "1px solid #ddd",
//                   }}
//                 >
//                   <div style={{ display: "flex", justifyContent: "space-between" }}>
//                     <span>{task.title}</span>
//                     <div>
//                       <button
//                         style={{ marginRight: "5px" }}
//                         onClick={() => handleMarkDone(task)}
//                       >
//                         Done
//                       </button>
//                       <button
//                         style={{ marginRight: "5px" }}
//                         onClick={() => handleEdit(task)}
//                       >
//                         Edit
//                       </button>
//                       <button onClick={() => handleDelete(task.id)}>Delete</button>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))
//       ) : (
//         <p style={{ color: "#999", textAlign: "center" }}>
//           No tasks found in localStorage.
//         </p>
//       )}
//     </div>
//   );
// };

// export default SchedulePage;
// SchedulePage.js
// src/pages/SchedulePage.js
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTask, toggleTaskDone } from './features/tasksSlice';
// import Swal from 'sweetalert2';
// import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

// function SchedulePage() {
//     const tasks = useSelector((state) => state.tasks?.tasks || []); // Add fallback for tasks
//     const [filteredCategory, setFilteredCategory] = useState('All'); // State to track selected category
//     const dispatch = useDispatch();

//     const handleDeleteTask = (id) => {
//         dispatch(deleteTask(id));
//         Swal.fire('Deleted', 'Task has been deleted!', 'success');
//     };

//     const handleToggleDone = (id) => {
//         dispatch(toggleTaskDone(id));
//     };

//     const handleCategoryClick = (category) => {
//         setFilteredCategory(category);
//     };

//     // Get unique categories from tasks
//     const categories = ['All', ...new Set(tasks.map((task) => task.category))];

//     // Filter tasks based on selected category
//     const filteredTasks =
//         filteredCategory === 'All'
//             ? tasks
//             : tasks.filter((task) => task.category === filteredCategory);

//     return (
//         <div className="container mt-5">
//             <h2 className="text-center mb-4">Scheduled Tasks</h2>

//             {/* Category Filter Buttons */}
//             <div className="text-center mb-4">
//                 {categories.map((category) => (
//                     <Button
//                         key={category}
//                         variant={filteredCategory === category ? 'primary' : 'outline-primary'}
//                         className="me-2 mb-2"
//                         onClick={() => handleCategoryClick(category)}
//                     >
//                         {category}
//                     </Button>
//                 ))}
//             </div>

//             {/* Task List */}
//             <Row>
//                 {filteredTasks.length > 0 ? (
//                     filteredTasks.map((task) => (
//                         <Col key={task.id} xs={12} md={6} lg={4} className="mb-3">
//                             <Card
//                                 className="p-3"
//                                 style={{
//                                     backgroundColor: '#A6F6F1',
//                                     border: '1px solid #ddd',
//                                     borderRadius: '10px',
//                                     transition: 'transform 0.3s ease-in-out',
//                                 }}
//                                 onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
//                                 onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
//                             >
//                                 <Card.Body>
//                                     <Card.Title className="mb-3">
//                                         {task.title}{' '}
//                                         {task.done && (
//                                             <Badge bg="success" className="ms-2">
//                                                 Done
//                                             </Badge>
//                                         )}
//                                     </Card.Title>
//                                     <Card.Text>
//                                         <strong>Category:</strong> {task.category} <br />
//                                         <strong>Description:</strong> {task.description}
//                                     </Card.Text>
//                                     <Button
//                                         variant="success"
//                                         className="me-2"
//                                         onClick={() => handleToggleDone(task.id)}
//                                     >
//                                         {task.done ? 'Mark as Undone' : 'Mark as Done'}
//                                     </Button>
//                                     <Button
//                                         variant="danger"
//                                         onClick={() => handleDeleteTask(task.id)}
//                                     >
//                                         Delete
//                                     </Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))
//                 ) : (
//                     <h5 className="text-center text-muted">No tasks found for this category.</h5>
//                 )}
//             </Row>
//         </div>
//     );
// }

// export default SchedulePage;
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTask, toggleTaskDone } from './features/tasksSlice';
// import Swal from 'sweetalert2';
// import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

// function SchedulePage() {
//     const tasks = useSelector((state) => state.tasks?.tasks || []); // Add fallback for tasks
//     const [filteredCategory, setFilteredCategory] = useState('All'); // State to track selected category
//     const dispatch = useDispatch();

//     const handleDeleteTask = (id) => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: 'You will not be able to revert this!',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Yes, delete it!',
//             cancelButtonText: 'No, cancel!',
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 dispatch(deleteTask(id));
//                 Swal.fire('Deleted!', 'Task has been deleted.', 'success');
//             }
//         });
//     };

//     const handleToggleDone = (id) => {
//         Swal.fire({
//             title: 'Mark task as done?',
//             text: 'This will mark the task as completed.',
//             icon: 'question',
//             showCancelButton: true,
//             confirmButtonText: 'Yes, mark as done',
//             cancelButtonText: 'No, keep it pending',
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 dispatch(toggleTaskDone(id));
//                 Swal.fire('Task marked as done!', '', 'success');
//             }
//         });
//     };

//     const handleCategoryClick = (category) => {
//         setFilteredCategory(category);
//     };

//     // Get unique categories from tasks
//     const categories = ['All', ...new Set(tasks.map((task) => task.category))];

//     // Filter tasks based on selected category
//     const filteredTasks =
//         filteredCategory === 'All'
//             ? tasks
//             : tasks.filter((task) => task.category === filteredCategory);

//     return (
//         <div className="container mt-5">
//             <h2 className="text-center mb-4">Scheduled Tasks</h2>

//             {/* Category Filter Buttons */}
//             <div className="text-center mb-4">
//                 {categories.map((category) => (
//                     <Button
//                         key={category}
//                         variant={filteredCategory === category ? 'primary' : 'outline-primary'}
//                         className="me-2 mb-2"
//                         onClick={() => handleCategoryClick(category)}
//                     >
//                         {category}
//                     </Button>
//                 ))}
//             </div>

//             {/* Task List */}
//             <Row>
//                 {filteredTasks.length > 0 ? (
//                     filteredTasks.map((task) => (
//                         <Col key={task.id} xs={12} md={6} lg={4} className="mb-3">
//                             <Card
//                                 className="p-3"
//                                 style={{
//                                     backgroundColor: '#A6F6F1',
//                                     border: '1px solid #ddd',
//                                     borderRadius: '10px',
//                                     transition: 'transform 0.3s ease-in-out',
//                                 }}
//                                 onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
//                                 onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
//                             >
//                                 <Card.Body>
//                                     <Card.Title className="mb-3">
//                                         {task.title}{' '}
//                                         {task.done && (
//                                             <Badge bg="success" className="ms-2">
//                                                 Done
//                                             </Badge>
//                                         )}
//                                     </Card.Title>
//                                     <Card.Text>
//                                         <strong>Category:</strong> {task.category} <br />
//                                         <strong>Description:</strong> {task.description}
//                                     </Card.Text>
//                                     <Button
//                                         variant="success"
//                                         className="me-2"
//                                         onClick={() => handleToggleDone(task.id)}
//                                     >
//                                         {task.done ? 'Mark as Undone' : 'Mark as Done'}
//                                     </Button>
//                                     <Button
//                                         variant="danger"
//                                         onClick={() => handleDeleteTask(task.id)}
//                                     >
//                                         Delete
//                                     </Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))
//                 ) : (
//                     <h5 className="text-center text-muted">No tasks found for this category.</h5>
//                 )}
//             </Row>
//         </div>
//     );
// }

// export default SchedulePage;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTask, editTask, deleteTask, toggleTaskDone } from './features/tasksSlice';
// import Swal from 'sweetalert2';
// import { Form, Button, Card, ListGroup } from 'react-bootstrap';
// import { FaTasks, FaRegClock, FaEdit, FaTrashAlt } from 'react-icons/fa';
// import { AiOutlineTag } from 'react-icons/ai';

// function SchedulePage() {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [category, setCategory] = useState('');
//     const [time, setTime] = useState('');
//     const dispatch = useDispatch();
    
//     // Fetch tasks from Redux state
//     const tasks = useSelector((state) => state.tasks);

//     const handleAddTask = () => {
//         if (!title || !description || !category || !time) {
//             Swal.fire('Error', 'All fields are required!', 'error');
//             return;
//         }

//         const newTask = {
//             id: Date.now(),
//             title,
//             description,
//             category,
//             time,
//             done: false,
//         };

//         dispatch(addTask(newTask));
//         Swal.fire('Success', 'Task added successfully!', 'success');

//         // Clear form inputs
//         setTitle('');
//         setDescription('');
//         setCategory('');
//         setTime('');
//     };

//     const handleEditTask = (id) => {
//         const taskToEdit = tasks.find((task) => task.id === id);
//         if (!taskToEdit) return;

//         const updatedTask = { ...taskToEdit, title, description, category, time };
//         dispatch(editTask({ id, updatedTask }));
//         Swal.fire('Success', 'Task updated successfully!', 'success');
//     };

//     const handleDeleteTask = (id) => {
//         dispatch(deleteTask(id));
//         Swal.fire('Deleted', 'Task removed successfully!', 'success');
//     };

//     const handleToggleTaskDone = (id) => {
//         dispatch(toggleTaskDone(id));
//     };

//     return (
//         <div className="container mt-5" style={{ color: '#A6F6F1' }}>
//             <h3 className="text-center mt-4">Your Tasks</h3>
//             <ListGroup>
//                 {tasks.map((task) => (
//                     <ListGroup.Item key={task.id} style={{ backgroundColor: '#F4F4F4' }}>
//                         <div>
//                             <strong>{task.title}</strong> - {task.category} - {task.time}
//                             <div>{task.description}</div>
//                             <Button
//                                 variant="warning"
//                                 className="me-2"
//                                 onClick={() => {
//                                     setTitle(task.title);
//                                     setDescription(task.description);
//                                     setCategory(task.category);
//                                     setTime(task.time);
//                                     handleEditTask(task.id);
//                                 }}
//                             >
//                                 <FaEdit /> Edit
//                             </Button>
//                             <Button
//                                 variant="danger"
//                                 className="me-2"
//                                 onClick={() => handleDeleteTask(task.id)}
//                             >
//                                 <FaTrashAlt /> Delete
//                             </Button>
//                             <Button
//                                 variant={task.done ? "success" : "secondary"}
//                                 onClick={() => handleToggleTaskDone(task.id)}
//                             >
//                                 {task.done ? 'Mark Incomplete' : 'Mark Complete'}
//                             </Button>
//                         </div>
//                     </ListGroup.Item>
//                 ))}
//             </ListGroup>
//         </div>
//     );
// }

// export default SchedulePage;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask, deleteTask, toggleTaskDone } from './features/tasksSlice';
import Swal from 'sweetalert2';
import { Button, ListGroup } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function SchedulePage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [time, setTime] = useState('');
    const dispatch = useDispatch();
    
    // Fetch tasks from Redux state
    const tasks = useSelector((state) => state.tasks);

    const handleAddTask = () => {
        if (!title || !description || !category || !time) {
            Swal.fire('Error', 'All fields are required!', 'error');
            return;
        }

        const newTask = {
            id: Date.now(),
            title,
            description,
            category,
            time,
            done: false,
        };

        dispatch(addTask(newTask));
        Swal.fire('Success', 'Task added successfully!', 'success');

        // Clear form inputs
        setTitle('');
        setDescription('');
        setCategory('');
        setTime('');
    };

    const handleEditTask = (id) => {
        const taskToEdit = tasks.find((task) => task.id === id);
        if (!taskToEdit) return;

        // Show SweetAlert prompt to edit the description
        Swal.fire({
            title: 'Edit Description',
            input: 'textarea',
            inputValue: taskToEdit.description,
            inputPlaceholder: 'Enter new description...',
            showCancelButton: true,
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            inputValidator: (value) => {
                if (!value) {
                    return 'Description cannot be empty';
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedDescription = result.value;
                const updatedTask = { ...taskToEdit, description: updatedDescription };

                // Dispatch action to update the task in Redux store
                dispatch(editTask({ id, updatedTask }));
                Swal.fire('Success', 'Task description updated!', 'success');
            }
        });
    };

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
        Swal.fire('Deleted', 'Task removed successfully!', 'success');
    };

    const handleToggleTaskDone = (id) => {
        dispatch(toggleTaskDone(id));
    };

    return (
        <div className="container mt-5" style={{ color: '#A6F6F1' }}>
            <h3 className="text-center mt-4">Your Tasks</h3>
            <ListGroup>
                {tasks.map((task) => (
                    <ListGroup.Item
                        key={task.id}
                        style={{
                            backgroundColor: '#A6F6F1',
                            color: 'black',
                            marginBottom: '10px',
                            padding: '15px',
                            borderRadius: '8px',
                            transition: 'background-color 0.3s, color 0.3s',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'black';
                            e.target.style.color = '#A6F6F1';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#A6F6F1';
                            e.target.style.color = 'black';
                        }}
                    >
                        <div>
                            <strong>{task.title}</strong> - {task.category} - {task.time}
                            <div>{task.description}</div>
                            <Button
                                variant="dark"
                                className="me-2"
                                onClick={() => handleEditTask(task.id)}
                            >
                                <FaEdit /> Edit
                            </Button>
                            <Button
                                variant="dark"
                                className="me-2"
                                onClick={() => handleDeleteTask(task.id)}
                            >
                                <FaTrashAlt /> Delete
                            </Button>
                            <Button
                                variant={task.done ? "success" : "secondary"}
                                onClick={() => handleToggleTaskDone(task.id)}
                            >
                                {task.done ? 'Mark Incomplete' : 'Mark Complete'}
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default SchedulePage;
