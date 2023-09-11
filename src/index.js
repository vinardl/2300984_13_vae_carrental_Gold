import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sewa from './pages/mulaisewa'
import Hasil from './pages/hasilPencarian'
import Detail from './pages/detailSewa'

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "sewa",
    element: <Sewa />,
  },
  {
    path: "hasil",
    element: <Hasil />,
  },
  {
    path: "detail",
    element: <Detail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
