import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './Redux/store.js';
import TasbihPage from './Pages/Tasbih/TasbihPage.jsx';
import TodoPage from './Pages/Todo/TodoPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TasbihPage/>,
  },
  {
    path: "/task",
    element: <TodoPage/>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
