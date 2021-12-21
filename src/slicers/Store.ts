import { configureStore } from "@reduxjs/toolkit";
import { singlePlayerSliceReducer } from "./SinglePlayer/SinglePlayerSlice";

export const store = configureStore({
  reducer: {
    singlePlayer: singlePlayerSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
