import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import SimpleLayout from "./layouts/simple";
//
import ManageCoursesPage from "./pages/ManageCoursesPage";
import UserPage from "./pages/UserPage";
// import LoginPage from './pages/LoginPage';
import Page404 from "./pages/Page404";
import ProductsPage from "./pages/ProductsPage";
import DashboardAppPage from "./pages/DashboardAppPage";
import { theme } from "./styles/theme";
import PostCoursePage from "pages/PostCourse";
import CourseDetailsPage from "pages/CourseDetailsPage";
import StreamPage from "pages/StreamPage";
import {
  Login,
  Home,
  Shop,
  Courses,
  CourseDetail,
  Signup,
  Cart,
  Instructor,
  Library,
  Wishlist,
  BuyCurrency,
  ResetPassword,
  PurchaseCourse,
} from "./pages";
import LearnerSiteLayout from "layouts/LearnerSite/LearnerSiteLayout";
import AccountInfo from "pages/AccountInfo";
import LiveClasses from "pages/LiveClasses";
import SwitchAccounts from "pages/SwitchAccounts";
import ConfirmEmail from "components/ConfirmEmail";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <LearnerSiteLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: "/home", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "/home", element: <Home /> },
        { path: "/account_info", element: <AccountInfo /> },
        { path: "/shop", element: <Shop /> },
        { path: "/courses", element: <Courses /> },
        { path: "/course_detail/:id", element: <CourseDetail /> },
        { path: "/cart", element: <Cart /> },
        { path: "/instructor/:id", element: <Instructor /> },
        { path: "/library", element: <Library /> },
        { path: "/wishlist", element: <Wishlist /> },
        { path: "/buycurrency", element: <BuyCurrency /> },
        { path: "/purchase_course/:id", element: <PurchaseCourse /> },
        { path: "/live_classes", element: <LiveClasses /> },
        { path: "/switch_accounts", element: <SwitchAccounts /> },
        { path: "/reset_password", element: <ResetPassword /> },
        { path: "/reset_password/:id/:token", element: <ResetPassword /> },
        { path: "/confirm_email", element: <ConfirmEmail /> },
      ],
    },
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
        // { path: "confirm_email", element: <ConfirmEmail /> },
      ],
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
