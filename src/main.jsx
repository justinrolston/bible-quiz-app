import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OldTestament from "./pages/OldTestament.jsx";
import NewTestament from "./pages/NewTestament.jsx";

//https://www.youtube.com/watch?v=E4Ha35zDngk
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/ot", element: <OldTestament /> },
  { path: "/nt", element: <NewTestament /> },
], {
  basename: "/bible-quiz-app"
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
