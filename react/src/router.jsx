import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Surveys from "./views/Surveys";
import SurveyView from "./views/SurveyView";
const router = createBrowserRouter([
 {
  path: '/',
  element: <DefaultLayout />,
  children: [
    {
      path: '/dashboard',
      element:  <Navigate to = '/'/>
     },
     {
      path: '/',
      element: <Dashboard />
     },
     {
      path: '/surveys',
      element: <Surveys />
     },
     {
      path: '/surveys/create',
      element: <SurveyView />
     },

    ]
 },
 {
  path: '/',
  element: <GuestLayout />,
  children: [
    {
      path: '/login',
      element: <Login />
     },
     {
      path: '/signup',
      element: <Signup />
     },

    ]
 },
])
export default router;
