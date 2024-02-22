import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from 'entities/auth/model/auth-slice';
import { baseApi } from 'shared/api';

const history = createBrowserHistor()
const routerMiddleware = createRouterMiddleware(history)


export const appStore = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware);
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
