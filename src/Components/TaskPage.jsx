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
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from './features/tasksSlice';
// import Swal from 'sweetalert2';
// import { v4 as uuidv4 } from 'uuid';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function TaskPage() {
//     const dispatch = useDispatch();
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState(''); // New state for description
//     const [category, setCategory] = useState('work');
//     const [time, setTime] = useState(''); // New state for time

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newTask = {
//             id: uuidv4(),
//             title,
//             description,
//             category: category.toLowerCase(),
//             completed: false,
//             time // Include time in the task object
//         };
//         dispatch(addTask(newTask));
//         Swal.fire('Task added!', '', 'success');

//         // Save the updated tasks to local storage
//         saveTasksToLocalStorage(newTask);

//         // Reset form fields
//         setTitle('');
//         setDescription('');
//         setCategory('work');
//         setTime('');
//     };

//     const saveTasksToLocalStorage = (newTask) => {
//         const currentTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         currentTasks.push(newTask);
//         localStorage.setItem('tasks', JSON.stringify(currentTasks));
//     };

//     return (
//         <div className="container mt-4">
//             <h2>Add a New Task</h2>
//             <form onSubmit={handleSubmit} className="form-group">
//                 <input
//                     type="text"
//                     className="form-control mb-2"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="Task Title"
//                     required
//                 />
//                 <textarea
//                     className="form-control mb-2"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     placeholder="Task Description"
//                     required
//                 />
//                 <select
//                     className="form-control mb-2"
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                 >
//                     <option value="work">Work</option>
//                     <option value="gaming">Gaming</option>
//                     <option value="study">Study</option>
//                     <option value="shopping">Shopping</option>
//                     <option value="music">Music</option>
//                     <option value="home">Home</option>
//                     <option value="travel">Travel</option>
//                     <option value="market">Market</option>
//                 </select>
//                 <input
//                     type="time"
//                     className="form-control mb-2"
//                     value={time}
//                     onChange={(e) => setTime(e.target.value)}
//                     required
//                 />
//                 <button type="submit" className="btn btn-primary">Add Task</button>
//             </form>
//         </div>
//     );
// }

// export default TaskPage;
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from "./features/tasksSlice";
// import Swal from 'sweetalert2';
// import { v4 as uuidv4 } from 'uuid';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function TaskPage() {
//     const dispatch = useDispatch();
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState(''); // New state for description
//     const [category, setCategory] = useState('work');
//     const [time, setTime] = useState(''); // New state for time

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newTask = {
//             id: uuidv4(),
//             title,
//             description,
//             category: category.toLowerCase(),
//             completed: false,
//             time // Include time in the task object
//         };
//         dispatch(addTask(newTask));
//         Swal.fire('Task added!', '', 'success');

//         // Save the updated tasks to local storage
//         saveTasksToLocalStorage(newTask);

//         // Reset form fields
//         setTitle('');
//         setDescription('');
//         setCategory('work');
//         setTime('');
//     };

//     const saveTasksToLocalStorage = (newTask) => {
//         const currentTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         currentTasks.push(newTask);
//         localStorage.setItem('tasks', JSON.stringify(currentTasks));
//     };

//     return (
//         <div className="container mt-4">
//             <h2>Add a New Task</h2>
//             <form onSubmit={handleSubmit} className="form-group">
//                 <input
//                     type="text"
//                     className="form-control mb-2"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="Task Title"
//                     required
//                 />
//                 <textarea
//                     className="form-control mb-2"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     placeholder="Task Description"
//                     required
//                 />
//                 <select
//                     className="form-control mb-2"
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                 >
//                     <option value="work">Work</option>
//                     <option value="gaming">Gaming</option>
//                     <option value="study">Study</option>
//                     <option value="shopping">Shopping</option>
//                     <option value="music">Music</option>
//                     <option value="home">Home</option>
//                     <option value="travel">Travel</option>
//                     <option value="market">Market</option>
//                 </select>
//                 <input
//                     type="time"
//                     className="form-control mb-2"
//                     value={time}
//                     onChange={(e) => setTime(e.target.value)}
//                     required
//                 />
//                 <button type="submit" className="btn btn-primary">Add Task</button>
//             </form>
//         </div>
//     );
// }

// export default TaskPage;
// TaskPage.js
// src/pages/TaskPage.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from "./features/tasksSlice";
// import Swal from 'sweetalert2';
// import { Form, Button, Card } from 'react-bootstrap';

// function TaskPage() {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [category, setCategory] = useState('');
//     const dispatch = useDispatch();

//     const handleAddTask = () => {
//         if (!title || !description || !category) {
//             Swal.fire('Error', 'All fields are required!', 'error');
//             return;
//         }

//         const newTask = {
//             id: Date.now(), // Unique ID for each task
//             title,
//             description,
//             category,
//             done: false,
//         };

//         dispatch(addTask(newTask));
//         Swal.fire('Success', 'Task added successfully!', 'success');

//         // Clear form inputs
//         setTitle('');
//         setDescription('');
//         setCategory('');
//     };

//     return (
//         <div className="container mt-5">
//             <Card className="p-4">
//                 <h2 className="text-center">Create a New Task</h2>
//                 <Form>
//                     <Form.Group className="mb-3">
//                         <Form.Label>Task Title</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Enter task title"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                         />
//                     </Form.Group>

//                     <Form.Group className="mb-3">
//                         <Form.Label>Task Description</Form.Label>
//                         <Form.Control
//                             as="textarea"
//                             rows={3}
//                             placeholder="Enter task description"
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                         />
//                     </Form.Group>

//                     <Form.Group className="mb-3">
//                         <Form.Label>Category</Form.Label>
//                         <Form.Select
//                             value={category}
//                             onChange={(e) => setCategory(e.target.value)}
//                         >
//                             <option value="">Select Category</option>
//                             <option value="Music">Music</option>
//                             <option value="Home">Home</option>
//                             <option value="Studies">Studies</option>
//                             <option value="Shopping">Shopping</option>
//                             <option value="Other">Other</option>
//                         </Form.Select>
//                     </Form.Group>

//                     <Button
//                         variant="primary"
//                         onClick={handleAddTask}
//                     >
//                         Add Task
//                     </Button>
//                 </Form>
//             </Card>
//         </div>
//     );
// }

// export default TaskPage;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './features/tasksSlice';
import Swal from 'sweetalert2';
import { Form, Button, Card } from 'react-bootstrap';
import { FaTasks, FaRegClock } from 'react-icons/fa'; // Importing icons
import { AiOutlineTag } from 'react-icons/ai';

function TaskPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [time, setTime] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (!title || !description || !category || !time) {
            Swal.fire('Error', 'All fields are required!', 'error');
            return;
        }

        const newTask = {
            id: Date.now(), // Unique ID for each task
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

    return (
        <div className="container mt-5" style={{ color: '#A6F6F1' }}>
<h2 className="text-center" style={{ color: '#A6F6F1' }}>
                    <FaTasks className="me-2"  style={{ color: '#A6F6F1' }}/>
                    Create a New Task
                </h2>            <Card
                className="p-4"
                style={{
                    backgroundColor: '#A6F6F1',
                    transition: 'all 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'black';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#A6F6F1';
                    e.currentTarget.style.color = 'black';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            <AiOutlineTag className="me-2" />
                            Task Title
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter task title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            <FaTasks className="me-2" />
                            Task Description
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter task description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            <AiOutlineTag className="me-2" />
                            Category
                        </Form.Label>
                        <Form.Select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select Category</option>
                            <option value="Music">Music</option>
                            <option value="Home">Home</option>
                            <option value="Studies">Studies</option>
                            <option value="Class">Class</option>
                            <option value="Yoga">Yoga</option>
                            <option value="Exercise">Exercise</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Friends">Friends</option>
                            <option value="Meeting">Meeting</option>
                            <option value="Game">Game</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            <FaRegClock className="me-2" />
                            Time
                        </Form.Label>
                        <Form.Control
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="dark" onClick={handleAddTask} >
                        Add Task
                    </Button>
                </Form>
            </Card>
        </div>
    );
}

export default TaskPage;
