import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home.tsx";
import LeaderBoard from "./pages/LeaderBoard.tsx";
import Game from "./pages/Game.tsx";
import MainPage from "./layout/MainPage.tsx";
import Error from "./pages/Error.tsx";

import './index.css'
import {BoardProvider} from "@/providers/BoardProvider.tsx";

const router = createBrowserRouter([
    {
        Component: MainPage,
        children: [
            {path: '/', element: <Home />},
            {path: '/board', element: <LeaderBoard />},
        ]
    },
    {path: '/game', element: <Game />},
    {path: '*', element: <Error />}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BoardProvider>
          <RouterProvider router={router} />
      </BoardProvider>
  </StrictMode>,
)
