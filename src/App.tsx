import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ElementBlog } from "./screens/ElementBlog/ElementBlog";
import { BlogPostDetail } from "./screens/ElementBlog/sections/BlogPostDetail/BlogPostDetail";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ElementBlog />} />
          <Route path="/post/:postId" element={<BlogPostDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
};
