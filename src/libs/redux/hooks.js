import { useDispatch, useSelector } from 'react-redux';
import { store } from './store';

// JavaScript không cần khai báo kiểu, loại bỏ phần này
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
