import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { ElementBlog } from "./screens/ElementBlog";
import "./tailwind.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <ElementBlog />
      </Router>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
