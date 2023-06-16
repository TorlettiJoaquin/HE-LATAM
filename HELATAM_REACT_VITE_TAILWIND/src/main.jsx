import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Guide } from "./routes/Guide.jsx";
import { WhatIsHe } from "./pages/Guide/WhatIsHe/WhatIsHe.jsx";
import { GameInfo } from "./pages/Guide/Gameinfo/GameInfo.jsx";
import { Terminology } from "./pages/Guide/Terminology/Terminology.jsx";
import { Battleground } from "./pages/Guide/Battleground/Battleground.jsx";
import { Modes } from "./pages/Guide/Modes/Modes.jsx";
import { Admin } from "./routes/Admin.jsx";
import { Download } from "./pages/Download/Download.jsx";
import { Items } from "./pages/Guide/Items/Items.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin",
        element: <Admin />,
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
        path: "/guide/modes",
        element: <Modes />,
    },
    {
        path: "/guide/gameinfo",
        element: <GameInfo />,
    },
    {
        path: "/guide/items",
        element: <Items />,
    },
    {
        path: "/download",
        element: <Download />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
