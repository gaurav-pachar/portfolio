import { configureStore } from '@reduxjs/toolkit';
import navBaritemsChngReducer from './Redux/btnChngSlice';

export default configureStore({
    reducer: {
        navBaritemsStateChng: navBaritemsChngReducer,
    },
})