import { configureStore } from "@reduxjs/toolkit";
import { publicationsApi } from "./publications/publicationsApi";

export const store = configureStore({
  reducer: {
    [publicationsApi.reducerPath]: publicationsApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(publicationsApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
