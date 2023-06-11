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
import GuardedRoute from "sections/auth/GuardedRoute";
import { useAuth } from "hooks/useAuth";
import { userHasRole } from "utils/helpers";
import { Roles } from "utils/constants";
import ManageReviewRequestsPage from "pages/ManageReviewRequestsPage";

// ----------------------------------------------------------------------

export default function Router() {
  const { user } = useAuth();

  const routes = useRoutes([
    {
      path: "/",
      element: <LearnerSiteLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: "/home", element: <Home /> },
        {
          element: (
            <GuardedRoute
              isAllowed={user === null}
              redirectTo={
                userHasRole(user, Roles.LEARNER) ? "/shop" : "/dashboard"
              }
            />
          ),
          children: [
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            { path: "/reset_password", element: <ResetPassword /> },
            { path: "/reset_password/:id/:token", element: <ResetPassword /> },
          ],
        },
        {
          element: (
            <GuardedRoute
              isAllowed={userHasRole(user, Roles.LEARNER)}
              redirectTo="/login"
            />
          ),
          children: [
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
          ],
        },
      ],
    },
    {
      element: (
        <GuardedRoute
          isAllowed={
            userHasRole(user, Roles.ADMIN) ||
            userHasRole(user, Roles.CREATOR) ||
            userHasRole(user, Roles.REVIEWER)
          }
        />
      ),
      children: [
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
            { path: "reviewCourse/:id", element: <StreamPage /> },
            { path: "manage-reviews", element: <ManageReviewRequestsPage /> },
          ],
        },
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