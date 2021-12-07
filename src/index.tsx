/* eslint react/jsx-key: off */
import * as React from "react";
import { Admin, Resource, RouteWithoutLayout } from "react-admin"; // eslint-disable-line import/no-unresolved
import { render } from "react-dom";
import { Route } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import retroTheme from "./retroTheme";
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

/* @ts-ignore */
const theme = createTheme(retroTheme);

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
