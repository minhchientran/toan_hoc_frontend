/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import Contact from "examples/Icons/Contact";
import About from "examples/Icons/About";
import Home from "layouts/Home";
import FixText from "layouts/FixText";
// import Equation from "layouts/Equation";
import SolveEquation from "layouts/SolveEquation";
import Calculator from "examples/Icons/Calculator";
import Derivative from "layouts/Derivative";
import Equation from "layouts/EquationNew";
import AreaTriangle from "layouts/AreaTriangle";
import Volume from "layouts/Volume";

const routes = [
  // {
  //   type: "collapse",
  //   name: "Liên hệ",
  //   key: "contact",
  //   route: "#",
  //   icon: <Contact size="12px" />,
  //   // component: <Dashboard />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Về chúng tôi",
  //   key: "about",
  //   route: "#",
  //   icon: <About size="12px" />,
  //   // component: <Dashboard />,
  //   noCollapse: true,
  // },
  // {
  //   type: "title",
  //   name: "Giải phương trình",
  //   key: "equation",
  //   icon: <Settings size="12px" />,
  //   noCollapse: false,
  //   collapse: [
  //     {
  //       type: "collapse",
  //       name: "Phương trình 2 ẩn",
  //       key: "equation-2",
  //       route: "/equation/equation-2",
  //       icon: <Settings size="12px" />,
  //       component: <Dashboard />,
  //     },
  //   ],
  // },
  // {
  //   type: "collapse",
  //   name: "Trang chủ",
  //   key: "home",
  //   route: "/home",
  //   icon: <Shop size="12px" />,
  //   component: <Home />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Sửa biểu thức",
  //   key: "fix-text",
  //   route: "/fix-text",
  //   icon: <Settings size="12px" />,
  //   component: <FixText />,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: "Đạo hàm",
    key: "derivative",
    route: "/derivative",
    icon: <Calculator size="12px" />,
    component: <Derivative />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Giải phương trình",
    key: "equation",
    route: "/equation",
    icon: <Calculator size="12px" />,
    component: <Equation />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Tính diện tích",
    key: "area",
    route: "/area",
    icon: <Calculator size="12px" />,
    component: <AreaTriangle />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Tính thể tích",
    key: "volume",
    route: "/volume",
    icon: <Calculator size="12px" />,
    component: <Volume />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   route: "/tables",
  //   icon: <Office size="12px" />,
  //   component: <Tables />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   route: "/billing",
  //   icon: <CreditCard size="12px" />,
  //   component: <Billing />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Virtual Reality",
  //   key: "virtual-reality",
  //   route: "/virtual-reality",
  //   icon: <Cube size="12px" />,
  //   component: <VirtualReality />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   route: "/rtl",
  //   icon: <Settings size="12px" />,
  //   component: <RTL />,
  //   noCollapse: true,
  // },
  // { type: "title", title: "Giải phương trình", key: "equations" },
  // {
  //   type: "collapse",
  //   name: "Phương trình 2 ẩn",
  //   key: "solve-equations-2",
  //   route: "/solve-equations-2",
  //   icon: <Calculator size="12px" />,
  //   component: <Equation />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Phương trình 3 ẩn",
  //   key: "solve-equations-3",
  //   route: "/solve-equations-3",
  //   icon: <Calculator size="12px" />,
  //   component: <Equation />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Phương trình 4 ẩn",
  //   key: "solve-equations-4",
  //   route: "/solve-equations-4",
  //   icon: <Calculator size="12px" />,
  //   component: <Equation />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Phương trình 5 ẩn",
  //   key: "solve-equations-5",
  //   route: "/solve-equations-5",
  //   icon: <Calculator size="12px" />,
  //   component: <Equation />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Giải phương trình",
  //   key: "solve-equations",
  //   route: "/solve-equations",
  //   icon: <Calculator size="12px" />,
  //   component: <SolveEquation />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   route: "/profile",
  //   icon: <CustomerSupport size="12px" />,
  //   component: <Profile />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   route: "/authentication/sign-in",
  //   icon: <Document size="12px" />,
  //   component: <SignIn />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   route: "/authentication/sign-up",
  //   icon: <SpaceShip size="12px" />,
  //   component: <SignUp />,
  //   noCollapse: true,
  // },
];

export default routes;
