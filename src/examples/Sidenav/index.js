import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React examples
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavCard from "examples/Sidenav/SidenavCard";

// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

// Soft UI Dashboard React context
import { useSoftUIController, setMiniSidenav } from "context";
// import style from "./style.module.css";
// import "./style.css";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  const listCol = routes.filter((data) => data.type === "title");
  const [close, setClose] = useState(false);
  // const [smallScreen, setSmallScreen] = useState(true);
  const [hideState, setHideState] = useState(
    Object.fromEntries(listCol.map((data) => [data.key, false]))
  );

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            color={color}
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink to={route} key={key}>
          <SidenavCollapse
            color={color}
            key={key}
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </NavLink>
      );
    } else if (type === "title") {
      returnValue = (
        <SoftTypography
          key={key}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          opacity={0.6}
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </SoftTypography>
      );
    } else if (type === "divider") {
      returnValue = <Divider key={key} />;
    }
    // else if (type === "title") {
    //   returnValue = (
    //     <div
    //       className={"nav-item"
    //         .concat(close ? " close" : "")
    //         // eslint-disable-next-line no-nested-ternary
    //         .concat(key === pathNameArr[1] ? " active" : key === pathNameArr[2] ? " active" : "")}
    //       onClick={() => {
    //         if (close) {
    //           setHideState({
    //             [key]: !hideState[key],
    //           });
    //         }
    //       }}
    //       // style={checkPermissionEmployee(title, "XEM") ? {} : { display: "none" }}
    //     >
    //       <SoftBox
    //         onClick={() => {
    //           setHideState({
    //             [key]: !hideState[key],
    //           });
    //         }}
    //         className={clsx(style.sidenavCollapse)}
    //         display="flex"
    //         justifyContent="space-between"
    //         fontWeight="bold"
    //       >
    //         <SidenavCollapse name={name} icon={icon} active={key === collapseName} close={close} />
    //       </SoftBox>
    //       <div className="nav-collapse">
    //         {close && (
    //           <SoftTypography
    //             sx={{
    //               display: hideState[key] ? "block" : "none",
    //               fontFamily: "Nunito Sans",
    //               fontStyle: "normal",
    //               fontWeight: "600",
    //               fontSize: "14px",
    //               lineHeight: "19px",
    //               color: "var(--gray-100)",
    //               borderBottom: "1px solid var(--green-30)",
    //               paddingBlock: "12px",
    //               marginInline: "12px",
    //             }}
    //           >
    //             {title}
    //           </SoftTypography>
    //         )}
    //         {collapse?.map((item) => (
    //           <div key={uuidv4()} className={"sideBarElement".concat(item.close ? " close" : "")}>
    //             <div
    //               key={item.key}
    //               className={clsx(style.sideBarElement)}
    //               style={{
    //                 overflow: "hidden",
    //                 display: hideState[item.box] || item.box === "none" ? "block" : "none",
    //                 // !checkPermissionEmployee(item.name, "XEM") && item.name !== "Chung"
    //                 //   ? "none"
    //                 //   : hideState[item.box] || item.box === "none"
    //                 //   ? "block"
    //                 //   : "none",
    //                 transition: "display 0.2s linear",
    //                 margin: "0px",
    //               }}
    //             >
    //               <NavLink to={item.route}>
    //                 <SidenavCollapse
    //                   color={item.color}
    //                   name={item.name}
    //                   icon={item.icon}
    //                   data={item.data}
    //                   active={item.key === collapseName}
    //                   noCollapse={item.noCollapse}
    //                 />
    //               </NavLink>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   );
    // }
    return returnValue;
  });

  return (
    <SidenavRoot {...rest} variant="permanent" ownerState={{ transparentSidenav, miniSidenav }}>
      <SoftBox pt={3} pb={1} px={4} textAlign="center">
        <SoftBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <SoftTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </SoftTypography>
        </SoftBox>
        <SoftBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && <SoftBox component="img" src={brand} alt="Mathematic" width="10rem" />}
          <SoftBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            {/* <SoftTypography component="h6" variant="button" fontWeight="medium">
              {brandName}
            </SoftTypography> */}
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <Divider />
      <List>{renderRoutes}</List>
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
