// component
import { Roles } from "utils/constants";
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: icon("ic_analytics"),
    roles: [Roles.ADMIN, Roles.CREATOR, Roles.REVIEWER],
  },
  {
    title: "user",
    path: "/dashboard/user",
    icon: icon("ic_user"),
    roles: [Roles.ADMIN],
  },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: icon('ic_cart'),
  // },
  {
    title: "Manage Courses",
    path: "/dashboard/manage-courses",
    icon: icon("ic_blog"),
    roles: [Roles.CREATOR],
  },
  {
    title: "Manage Review Requests",
    path: "/dashboard/manage-reviews",
    icon: icon("ic_blog"),
    roles: [Roles.ADMIN],
  },
  {
    title: "Review Courses",
    path: "/dashboard/review-courses",
    icon: icon("ic_blog"),
    roles: [Roles.REVIEWER],
  },
  {
    title: "Verification Requests",
    path: "/dashboard/verification",
    icon: icon("ic_blog"),
    roles: [Roles.CREATOR],
  },
  // {
  //   title: "Post Course",
  //   path: "/dashboard/postCourse",
  //   icon: icon("ic_blog"),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
