import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import RootLayout from "./pages/Root";


const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ]
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
