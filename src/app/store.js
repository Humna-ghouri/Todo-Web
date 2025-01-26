// // src/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import tasksReducer from '../Components/features/tasksSlice.js'; // Adjusted path
// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, tasksReducer);

// const store = configureStore({
//     reducer: {
//         tasks: persistedReducer,
//     },
// });

// export const persistor = persistStore(store);
// export default store;
// src/app/store.js
// src/app/store.js
// src/app/store.js
// src/app/store.js
// src/app/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import tasksReducer from '../Components/features/tasksSlice'; // Adjusted import path

// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, tasksReducer);

// const store = configureStore({
//     reducer: {
//         tasks: persistedReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore these actions
//             },
//         }),
// });

// export const persistor = persistStore(store);
// export default store;
// src/redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// // import taskReducer from '../Components/features/tasksSlice.js';

// const store = configureStore({
//   reducer: {
//     tasks: taskReducer
//   }
// });

// export default store;

// src/app/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // localStorage or sessionStorage
// import rootReducer from './reducers'; // Your root reducer

// const persistConfig = {
//   key: 'root',
//   storage, // Specifies where the persisted data is stored
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// const persistor = persistStore(store); // Create persistor

// export { store, persistor }; // Export both store and persistor
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../Components/features/tasksSlice.js';

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
});
