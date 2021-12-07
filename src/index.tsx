/* eslint react/jsx-key: off */
import * as React from "react";
import { Admin, Resource, RouteWithoutLayout } from "react-admin"; // eslint-disable-line import/no-unresolved
import { render } from "react-dom";
import { Route } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
//import backImage from "file!./images/bg-blue-black.png";
//const backImage = require("./images/bg-blue-black.png");

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
    /*     MuiMenu: {
      paper: {
        borderRadius: 0,
        color: "blue !important",
      },
    }, */
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
    MuiAppBar: {
      colorSecondary: {
        width: "100%",
        zIndex: 9,
        display: "block",
        position: "fixed",
        backgroundColor: "rgb(168, 168, 168)",
        padding: "0px 2px",
        height: 26,
        lineHeight: "26px",
        color: "black",
        "& div": {
          height: "inherit",
          lineHeight: "inherit",
          minHeight: "unset",
        },
        boxShadow: "none !important",
      },
    },
    /* @ts-ignore */
    RaUserMenu: {
      avatar: {
        height: "20px !important",
        width: "24px !important",
        lineHeight: "20px !important",
        borderRadius: 0,
        "& img": {
          filter: "contrast(1000%)",
        },
      },
      userButton: {
        color: "black",
        padding: 0,
        fontSize: "inherit",
        transition: "none",
        lineHeight: "inherit",
        boxShadow: "none",
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
        "& h6, p": {
          color: "inherit",
        },
        transition: "none",
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
      colorDefault: {
        backgroundColor: "transparent",
      },
    },
    MuiCheckbox: {
      root: {
        color: "inherit",
        "&.Mui-checked": {
          color: "inherit",
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
      colorPrimary: {
        color: "inherit",
        "&.Mui-checked": {
          color: "inherit",
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
        color: "black",
        "&.Mui-disabled": {
          backgroundColor: "#a80000",
          color: "black",
          textDecoration: "line-through",
        },
        border: "none",
        cursor: "pointer",
        textAlign: "center",
        boxShadow: "10px 10px black",
        fontSize: "0.8125rem",
        borderRadius: 0,
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
        boxShadow: "10px 10px black",
        "&.Mui-disabled": {
          backgroundColor: "#a80000",
          color: "black",
          textDecoration: "line-through",
          boxShadow: "10px 10px black",
        },
      },
      containedPrimary: {
        backgroundColor: "#00a800",
        color: "black",
      },
    },
    MuiFormControl: {
      root: {
        color: "white",
        flexDirection: "row",
        "& .ql-toolbar": {
          "& span": {
            color: "white !important",
          },
          "& svg": {
            fill: "white !important",
            "& .ql-stroke": {
              stroke: "white !important",
            },
          },
          "& button, .ql-picker": {
            "&:hover": {
              backgroundColor: "#ff0 !important",
              "& .ql-picker-label": {
                color: "black !important",
              },
              "& .ql-stroke": {
                stroke: "black !important",
              },
            },
          },
        },
        "& .ql-editor": {
          backgroundColor: "black !important",
          "&:before": {
            content: "unset !important",
          },
          "&:after": {
            content: "unset !important",
          },
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: "white",
        minWidth: 250,
        padding: 0,
        margin: 0,
        marginRight: 20,
        width: "250px",
        overflow: "hidden",
        "&:empty": {
          display: "none",
        },
        "& span": {
          backgroundColor: "#0000a8",
        },
        "&.Mui-disabled": {
          color: "white",
        },
        "&:after": {
          content: '"........................................:"',
          right: 0,
          position: "absolute",
          zIndex: -1,
        },
        "&.Mui-error": {
          color: "white",
          backgroundColor: "red",
        },
      },
    },
    MuiInputLabel: {
      animated: {
        transition: "none",
      },
      formControl: {
        display: "flex",
        transform: "scale(1) !important",
        alignItems: "center",
        position: "relative",
        "&.Mui-focused": {
          color: "inherit",
        },
      },
      shrink: {
        display: "flex",
        transform: "scale(1) !important",
        alignItems: "center",
        position: "relative",
      },
      marginDense: {
        transform: "scale(1) !important",
      },
    },
    /* @ts-ignore */
    RaCheckboxGroupInput: {
      label: {
        transform: "scale(1) !important",
      },
    },
    MuiFormGroup: {
      root: {
        position: "absolute",
        top: -25,
        left: 260,
      },
    },
    RaFileInput: {
      dropZone: {
        backgroundColor: "transparent",
        color: "white",
        border: "solid 2px white",
      },
    },
    RaImageInput: {
      dropZone: {
        backgroundColor: "transparent",
        color: "white",
        border: "solid 2px white",
      },
    },
    MuiInputBase: {
      root: {
        minWidth: 200,
      },
      input: {
        padding: 0,
        height: 30,
      },
    },
    MuiInput: {
      root: {
        display: "flex",
        backgroundColor: "black",
        color: "white",
        marginTop: "0 !important",
      },
      underline: {
        transition: "none",
        border: "none",
        "&:before": {
          transition: "none",
          border: "none",
          content: "unset",
        },
        "&:after": {
          transition: "none",
          border: "none",
          content: "unset",
        },
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
          transition: "none",
          fill: "black",
        },
        "&.Mui-disabled": {
          backgroundColor: "transparent",
        },
        "&.Mui-focused": {
          backgroundColor: "transparent",
        },
        "& svg": {
          transition: "none",
          fill: "white",
          "&:hover": {
            transition: "none",
            fill: "black",
          },
        },
      },
      adornedEnd: {
        paddingRight: 0,
      },
      inputMarginDense: {
        paddingTop: "0 !important",
        paddingBottom: "0 !important",
      },
      multiline: {
        padding: 0,
        paddingTop: "0 !important",
        paddingBottom: "0 !important",
      },
      input: {
        height: 30,
        display: "flex",
        padding: 0,
        backgroundColor: "black",
        color: "white",
        marginTop: "0 !important",
        borderRadius: 0,
        boxSizing: "border-box",
        "&.Mui-disabled": {
          backgroundColor: "transparent",
        },
      },
      underline: {
        transition: "none",
        border: "none",
        "&:before": {
          transition: "none",
          border: "none",
          content: "unset",
        },
        "&:after": {
          transition: "none",
          border: "none",
          content: "unset",
        },
      },
    },
    RaResettableTextField: {
      clearButton: {
        "&:hover": {
          "& svg": {
            transition: "none",
            fill: "black",
          },
        },
      },
    },
    MuiFormHelperText: {
      root: {
        marginTop: 0,
        display: "flex",
        alignItems: "center",
        "&.Mui-error": {
          color: "white",
          backgroundColor: "red",
        },
      },
    },
    RaLabeled: {
      value: {
        padding: 0,
      },
    },
    RaLoginForm: {
      input: {
        "& label": {
          "&:after": {
            content: '"..............:"',
          },
        },
      },
    },
    MuiChip: {
      root: {
        borderRadius: 0,
      },
      labelSmall: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      label: {
        color: "white",

        backgroundColor: "black",
      },
      sizeSmall: {
        height: 20,
      },
    },
    MuiTabs: {
      flexContainer: {
        color: "cyan",
        backgroundColor: "#0000a8",
        transition: "none",
        borderBottom: "2px solid",
      },
      root: {
        color: "cyan",
        backgroundColor: "inherit",
        transition: "none",
        borderBottom: "2px solid",
      },
    },
    MuiTab: {
      root: {
        "&:hover": {
          color: "black",
          backgroundColor: "#ff0",
          opacity: 1,
        },
        "&.Mui-selected": {
          color: "black",
          backgroundColor: "#ff0",
          opacity: 1,
        },
      },
      textColorPrimary: {
        "&:hover": {
          color: "black",
          backgroundColor: "#ff0",
          opacity: 1,
        },
        "&.Mui-selected": {
          color: "black",
          backgroundColor: "#ff0",
          opacity: 1,
        },
      },
    },
    PrivateTabIndicator: {
      root: {
        display: "none",
      },
    },
    RaLayout: {
      content: {
        backgroundColor: "#0000a8",
        borderStyle: "double",
        borderWidth: "thick",
        borderColor: "white",
      },
      root: {
        backgroundImage:
          "url(node_modules/tuicss/dist/images/bg-blue-black.png)",
        "& .edit-page": {
          backgroundColor: "#0000a8",
          borderStyle: "double",
          borderWidth: "thick",
          borderColor: "white",
        },
      },
    },
    MuiTable: {
      root: {
        color: "white",
      },
    },
    MuiTableRow: {
      hover: {
        "&:hover": {
          backgroundColor: "cyan !important",
          color: "black",
        },
      },
    },
    MuiTableSortLabel: {
      root: {
        color: "#ff0",
      },
      active: {
        color: "#ff0 !important",
        "& svg": {
          color: "#ff0 !important",
          transition: "none",
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 0,
        borderLeft: "1px solid",
      },
      head: {
        color: "#ff0",
        fontWeight: "bold",
        backgroundColor: "#0000a8",
        borderLeftColor: "transparent",
        textAlign: "center",
      },
      body: {
        color: "inherit",
      },
    },
    RaDatagrid: {
      headerCell: {
        backgroundColor: "#0000a8",
      },
      expandIcon: {
        color: "white",
        transition: "none",
        "& svg": {
          transition: "none",
        },
      },
      expandIconCell: {
        borderLeft: "none",
        color: "#ff0",
      },
    },
    MuiTablePagination: {
      toolbar: {
        color: "cyan",
        borderTop: "2px solid cyan",
      },
      input: {
        transition: "none",
        "& svg": {
          color: "currentColor",
        },
      },
      menuItem: {
        color: "white",
        transition: "none",

        "&.Mui-selected": {
          color: "black",
          backgroundColor: "#ff0",
          "&:hover": {
            color: "black",
            backgroundColor: "#ff0",
          },
        },
        "&:hover": {
          color: "black",
          backgroundColor: "#ff0",
        },
      },
    },
    RaList: {
      root: {
        backgroundColor: "#0000a8",
      },
      main: {
        color: "white",
      },
      content: {
        transition: "none",
      },
      bulkActionsDisplayed: {
        transition: "none",
      },
    },
    RaEdit: {
      root: {
        backgroundColor: "#0000a8",
      },
      main: {
        color: "white",
      },
    },
    RaShow: {
      root: {
        backgroundColor: "#0000a8",
      },
      main: {
        color: "white",
      },
    },
    RaCreate: {
      root: {
        backgroundColor: "#0000a8",
      },
    },
    RaToolbar: {
      toolbar: {
        backgroundColor: "#0000a8",
      },
    },
    RaListToolbar: {
      toolbar: {
        color: "cyan",
        backgroundColor: "inherit",
        transition: "none",
        borderBottom: "2px solid",
      },
    },
    RaBulkActionsToolbar: {
      toolbar: {
        color: "cyan",
        backgroundColor: "inherit",
        transition: "none",
      },
      icon: {
        backgroundColor: "#00a800",
        color: "black",
        boxShadow: "10px 10px black",
        transition: "none",
      },
    },
    MuiListItem: {
      root: {
        transition: "none",
        "& svg": {
          transition: "none",
        },
      },
      button: {
        transition: "none",
      },
    },
    MuiCollapse: {
      root: {
        transition: "none",
      },
    },
    MuiPopover: {
      paper: {
        backgroundColor: "#a85600",
        color: "white",
        "& ul > li": {
          color: "inherit",
          "&.MuiListItem-button:hover": {
            transition: "none",
            color: "black",
            "& svg": {
              transition: "none",
              fill: "black",
            },
            backgroundColor: "#ff0",
          },
          "& div": {
            minWidth: 30,
          },
          "& svg": {
            transition: "none",
            fill: "white",
          },
        },
        borderStyle: "solid",
        borderWidth: "medium",
        borderColor: "white",
        transition: "none !important",
      },
    },
    RaLogin: {
      main: {
        backgroundImage:
          "url(node_modules/tuicss/dist/images/bg-blue-black.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "initial",
      },
      card: {
        backgroundColor: "#a85600",
        color: "white",
        borderStyle: "solid",
        borderWidth: "medium",
        borderColor: "white",
        transition: "none !important",
        minWidth: 600,
      },
    },
  },
});

render(
  <React.StrictMode>
    <Admin
      /* @ts-ignore */
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
        /* @ts-ignore */
        <Resource name="posts" {...posts} />,
        <Resource name="comments" {...comments} />,
        /* @ts-ignore */
        permissions ? <Resource name="users" {...users} /> : null,
        <Resource name="tags" {...tags} />,
      ]}
    </Admin>
  </React.StrictMode>,
  document.getElementById("root")
);
