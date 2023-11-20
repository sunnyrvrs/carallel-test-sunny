// Importing 'createSlice' from Redux Toolkit. 
// Redux Toolkit simplifies the process of writing Redux logic and reduces boilerplate.
import { createSlice } from '@reduxjs/toolkit';

// Creating a new slice of the Redux state called 'articleSlice'.
// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app.
export const articleSlice = createSlice({
    // The name of the slice, which will be used in action types.
    name: 'article',
    initialState: {
        data: {}
    },
    // Reducers define how the state will change in response to actions.
    reducers: {
        // This will be used to update the 'data' property of the state.
        // The 'action' parameter is an object representing the action being processed.
        // 'action.payload' contains the new data for the 'data' property.
        updateArticleData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { updateArticleData } = articleSlice.actions;

export default articleSlice.reducer;