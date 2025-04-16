import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';

export const store = configureStore({
  reducer: rootReducer,
});

// JavaScript không cần khai báo kiểu, loại bỏ phần này
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
