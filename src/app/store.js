import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './features/counter/counterSlice';
import postsReducer from './features/posts/postsSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    posts: postsReducer,
  },
});
