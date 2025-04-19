import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Post {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
  searchQuery: "",
};

export const fetchPosts = createAsyncThunk<
  Post[],
  void,
  { rejectValue: string }
>("posts/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=tesla&from=2025-03-19&sortBy=publishedAt&apiKey=${apiKey}`
    );
    return response.data.articles;
  } catch (error) {
    return rejectWithValue("Failed to fetch posts");
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(
        fetchPosts.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || "An error occurred";
        }
      );
  },
});

export const { setSearchQuery } = postsSlice.actions;
export default postsSlice.reducer;
