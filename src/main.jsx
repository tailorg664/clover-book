import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Dashboard, Register, Signin } from "./components/index.js";
// import App from './App.jsx'
import "./index.css";
//router creation
const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<Dashboard />} />
      <Route path="register" element={<Register />} />
      <Route path="signin" element={<Signin />} />
    </>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
