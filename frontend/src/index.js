import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './App'
import Home from './pages/Home';
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import SideNav from './components/LandingPage/sideNav';
import FriendList from './components/FriendList';
import Shop from './components/Shop';
import Chats from './components/Chats';
import ProtectedRoute from './ProtectedRoutes';
import { AuthProvider } from './contexts/authContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
   
  },
  {
    path:"/home",
    element:<Home/>,
   
  },
  {
    path:"/:username/landing",
    element:<SideNav/>,
   
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/:username/friendList",
    element:(
      <ProtectedRoute>
        <FriendList/>
      </ProtectedRoute>
    )
  },
  {
    path:"/:username/shop",
    element:(
      <ProtectedRoute>
        <Shop/>
      </ProtectedRoute>
    )
  },
  {
    path:"/:username/chats",
    element:(
        <Chats/>
     
    )
  }
  
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>

     <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
