import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Guide } from "./routes/Guide.jsx";
import { Admin } from "./routes/Admin.jsx";
import { WhatIsHe } from "./pages/Guide/WhatIsHe/WhatIsHe.jsx";
import { GameInfo } from "./pages/Guide/Gameinfo/GameInfo.jsx";
import { Terminology } from "./pages/Guide/Terminology/Terminology.jsx";
import { Battleground } from "./pages/Guide/Battleground/Battleground.jsx";

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
        path: "/guide/whatishe",
        element: <WhatIsHe />,
    },
    {
        path: "/guide/terminology",
        element: <Terminology />,
    },
    {
        path: "/guide/battleground",
        element: <Battleground />,
    },
    {
        path: "/guide/gameinfo",
        element: <GameInfo />,
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
