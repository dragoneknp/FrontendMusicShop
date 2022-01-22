import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { albumCardSlice } from "./Slices/albumCardSlice";
import { cardSlice } from "./Slices/cardSlice";
export const store = configureStore({
    reducer: { card: cardSlice.reducer, albumCard: albumCardSlice.reducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
