// Redux Toolkit's 'configureStore' function simplifies the store setup process and includes good defaults.
// It helps in configuring the store with reducers, middleware, and enhancers.
import { configureStore } from '@reduxjs/toolkit';
import { articleSlice } from '@/articleSlice';

// Reducers specify how the application's state changes in response to actions.
export const store = configureStore({
    // Reducers specify how the application's state changes in response to actions.
    reducer: {
         // Reducers specify how the application's state changes in response to actions.
        // This means that the state and actions defined in 'articleSlice' will be accessible under the 'article' namespace.
        article: articleSlice.reducer
    },
});