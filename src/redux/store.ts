import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // [api.reducer]: api.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
    //   .concat(api.middleware)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
