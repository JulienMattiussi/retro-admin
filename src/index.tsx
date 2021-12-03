/* eslint react/jsx-key: off */
import * as React from "react";
import { Admin, Resource, RouteWithoutLayout } from "react-admin"; // eslint-disable-line import/no-unresolved
import { render } from "react-dom";
import { Route } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";

import authProvider from "./authProvider";
import comments from "./comments";
import CustomRouteLayout from "./customRouteLayout";
import CustomRouteNoLayout from "./customRouteNoLayout";
import dataProvider from "./dataProvider";
import i18nProvider from "./i18nProvider";
import Layout from "./Layout";
import posts from "./posts";
import users from "./users";
import tags from "./tags";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },
  palette: {
    //type: "dark",
  },
  overrides: {
    MuiMenu: {
      paper: {
        borderRadius: 0,
        color: "blue !important",
      },
    },
    MuiButtonBase: {
      root: {
        // recreate a static ripple color
        // use the currentColor to make it work both for outlined and contained buttons
        // but to dim the background without dimming the text,
        // put another element on top with a limited opacity
        content: '""',
        //backgroundColor: "yellow !important",
        //opacity: 0.3,
        borderRadius: "inherit",
      },
    },
    MuiPaper: {
      root: {
        // recreate a static ripple color
        // use the currentColor to make it work both for outlined and contained buttons
        // but to dim the background without dimming the text,
        // put another element on top with a limited opacity
        borderRadius: 0,
        backgroundColor: "#0000a8",
        color: "white",
      },
      rounded: {
        borderRadius: 0,
      },
      elevation1: {
        boxShadow: "none",
      },
    },
    MuiGrid: {
      container: {
        backgroundColor: "transparent",
      },
      item: {
        backgroundColor: "#0000a8",
        borderStyle: "double",
        borderWidth: "thick",
        borderColor: "white",
        padding: 0,
        margin: 6,
      },
    },
    MuiCardHeader: {
      subheader: {
        color: "#3f51b5",
      },
    },
    MuiAvatar: {
      root: {
        borderRadius: 0,
      },
    },
    MuiCheckbox: {
      root: {
        "&.Mui-checked": {
          "&:before": {
            content: '"[■]"',
          },
        },
        "&:before": {
          content: '"[ ]"',
          minWidth: "50px",
          letterSpacing: -3,
        },
        "& span": {
          display: "none",
        },
      },
    },
    MuiIconButton: {
      root: {
        transition: "none",
        padding: 0,
        marginRight: 10,
        borderRadius: 0,
        "&:hover": {
          backgroundColor: "#ff0 !important",
          borderRadius: 0,
        },
        "& svg": {
          transition: "none",
        },
      },
    },
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "#ff0 !important",
          borderRadius: 0,
        },
        transition: "none",
        outline: 0,
        padding: "1px 10px",
        marginRight: 12,
        backgroundColor: "#00a800",
        "&.Mui-disabled": {
          backgroundColor: "#a80000",
          color: "black",
          textDecoration: "line-through",
        },
        color: "black",
        border: "none",
        cursor: "pointer",
        textAlign: "center",
        boxShadow: "10px 10px black",
        fontSize: "0.8125rem",
        borderRadius: 0,
        lineHeight: "1px",
        userSelect: "none",
      },
      textPrimary: {
        color: "black",
      },
      textSizeSmall: {
        padding: "1px 10px",
      },
      text: {
        padding: "1px 10px",
      },
      contained: {
        "&.Mui-disabled": {
          backgroundColor: "#a80000",
          color: "black",
          textDecoration: "line-through",
          boxShadow: "10px 10px black",
        },
      },
    },
    MuiFormControl: {
      root: {
        color: "white",
        flexDirection: "row",
      },
    },
    MuiFormLabel: {
      root: {
        color: "white",
        minWidth: 250,
        padding: 0,
        margin: 0,
        width: "250px",
        overflow: "hidden",
        "& span": {
          backgroundColor: "#0000a8",
        },
        "&:after": {
          content: '"........................................:"',
          right: 0,
          position: "absolute",
          zIndex: -1,
        },
      },
    },
    MuiInputLabel: {
      animated: {
        transition: "none",
      },
    },
    RaLabeled: {
      value: {
        padding: 0,
      },
    },
    RaLayout: {
      content: {
        backgroundColor: "inherit",
      },
      root: {
        "& .edit-page": {
          backgroundColor: "#0000a8",
          borderStyle: "double",
          borderWidth: "thick",
          borderColor: "white",
        },
      },
    },
    RaList: {
      root: {
        backgroundColor: "#0000a8",
        borderStyle: "double",
        borderWidth: "thick",
        borderColor: "white",
      },
    },
    RaEdit: {
      root: {
        backgroundColor: "#0000a8",
        borderStyle: "double",
        borderWidth: "thick",
        borderColor: "white",
      },
    },
    RaShow: {
      root: {
        backgroundColor: "#0000a8",
        borderStyle: "double",
        borderWidth: "thick",
        borderColor: "white",
      },
    },
    RaToolbar: {
      toolbar: {
        backgroundColor: "#0000a8",
      },
    },
  },
});

render(
  <React.StrictMode>
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      theme={theme}
      title="Retro Admin"
      layout={Layout}
      customRoutes={[
        <RouteWithoutLayout
          exact
          path="/custom"
          component={(props) => <CustomRouteNoLayout {...props} />}
        />,
        <Route
          exact
          path="/custom2"
          component={(props) => <CustomRouteLayout {...props} />}
        />,
      ]}
    >
      {(permissions) => [
        <Resource name="posts" {...posts} />,
        <Resource name="comments" {...comments} />,
        permissions ? <Resource name="users" {...users} /> : null,
        <Resource name="tags" {...tags} />,
      ]}
    </Admin>
  </React.StrictMode>,
  document.getElementById("root")
);
