import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { albumCardDetailsSlice } from "./Slices/albumCardDetailsSlice";
import { albumCardSlice } from "./Slices/albumCardSlice";
import { cardDetailsSlice } from "./Slices/cardDetailsSlice";
import { cardSlice } from "./Slices/cardSlice";
import { loginSlice } from "./Slices/loginSlice";
import { myBidsSlice } from "./Slices/myBidsSlice";
import { registerSlice } from "./Slices/registerSlice";
export const store = configureStore({
    reducer: {
        card: cardSlice.reducer,
        albumCard: albumCardSlice.reducer,
        cardDetails: cardDetailsSlice.reducer,
        albumCardDetails: albumCardDetailsSlice.reducer,
        register: registerSlice.reducer,
        login: loginSlice.reducer,
        myBids: myBidsSlice.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
