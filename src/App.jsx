// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import TaskPage from './Components/TaskPage';
import SchedulePage from './Components/SchedulePage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './app/store';

function App() {
    const [tasks, setTasks] = useState([]); // Define tasks state

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/task" element={<TaskPage setTasks={setTasks} />} />
                        <Route path="/schedule" element={<SchedulePage tasks={tasks} />} />
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;