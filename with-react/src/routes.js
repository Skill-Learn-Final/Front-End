import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import SimpleLayout from "./layouts/simple";
//
import ManageCoursesPage from "./pages/ManageCoursesPage";
import UserPage from "./pages/UserPage";
// import LoginPage from './pages/LoginPage';
import { Login, Signup, Home } from "./pages";
import Page404 from "./pages/Page404";
import ProductsPage from "./pages/ProductsPage";
import DashboardAppPage from "./pages/DashboardAppPage";
import { theme } from "./styles/theme";
import PostCoursePage from "pages/PostCourse";
import CourseDetailsPage from "pages/CourseDetailsPage";
import StreamPage from "pages/StreamPage";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <DashboardAppPage /> },
        { path: "user", element: <UserPage /> },
        { path: "products", element: <ProductsPage /> },
        {
          path: "manage-courses",
          element: <ManageCoursesPage />,
        },
        {
          path: "manage-courses/:id",
          element: <CourseDetailsPage />,
        },
        { path: "postCourse", element: <PostCoursePage /> },
        { path: "reviewCourse", element: <StreamPage /> },
      ],
    },
    {
      path: "/",
      element: <Login theme={theme} />,
    },
    {
      path: "login",
      element: <Login theme={theme} />,
    },
    {
      path: "Signup",
      element: <Signup theme={theme} />,
    },
    {
      path: "home",
      element: <Home theme={theme} />,
    },

    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
