import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "redux/store";

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useReduxDispatch: () => AppDispatch = useDispatch;
