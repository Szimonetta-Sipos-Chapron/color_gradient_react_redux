import { configureStore } from '@reduxjs/toolkit';
import gradientReducer from './gradientReducer';


const store = configureStore({
    reducer: {
        gradient: gradientReducer
    }
})

export default store;
