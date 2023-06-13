import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Guide } from "./routes/Guide.jsx";
import { Admin } from "./routes/Admin.jsx";
import { What_Is_He } from "./pages/Guide/What_is_he/What_Is_He.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/guide",
        element: <Guide />,
    },
    {
        path: "/guide/what_is_he",
        element: <What_Is_He />,
    },
    {
        path: "/admin",
        elemen: <Admin />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
