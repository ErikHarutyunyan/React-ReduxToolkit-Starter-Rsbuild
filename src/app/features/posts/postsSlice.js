import { createSlice } from '@reduxjs/toolkit';

import { getPostId, getPosts } from './postsActions';

const initialState = {
  loading: false,
  posts: [],
  post: {},
  latest: false,
  search: '',
  error: null,
  message: '',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    setLatest: (state, { payload }) => {
      state.latest = payload;
    },
    resetPosts: state => {
      state.posts = initialState.posts;
      state.latest = initialState.latest;
      state.search = initialState.search;
      state.error = initialState.error;
      state.message = initialState.message;
    },
    resetPost: state => {
      state.post = initialState.post;
      state.error = initialState.error;
      state.message = initialState.message;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, state => {
        state.loading = true;
        state.error = false;
        state.message = '';
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.message = payload;
      })
      .addCase(getPostId.pending, state => {
        state.loading = true;
        state.error = false;
        state.message = '';
      })
      .addCase(getPostId.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.post = payload;
      })
      .addCase(getPostId.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.message = payload;
      });
  },
});

export const { setSearch, setLatest, resetPosts, resetPost } =
  postsSlice.actions;

export const selectPosts = state => state.posts;

export default postsSlice.reducer;
