import * as React from "react";
import { forwardRef, memo } from "react";
import { Layout, AppBar, UserMenu, useLocale, useSetLocale } from "react-admin";
import { MenuItem, ListItemIcon, MenuItemProps } from "@material-ui/core";
import Language from "@material-ui/icons/Language";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import MyMenu from "./Menu";

const useSwitchStyles = makeStyles((theme) => ({
  menuItem: {
    color: theme.palette.text.secondary,
  },
  icon: { minWidth: theme.spacing(2) },
}));

const SwitchLanguage = forwardRef((props: MenuItemProps, ref) => {
  const locale = useLocale();
  const setLocale = useSetLocale();
  const classes = useSwitchStyles();
  return (
    <MenuItem
      ref={ref}
      className={classes.menuItem}
      onClick={(e) => {
        setLocale(locale === "en" ? "fr" : "en");
        props.onClick(e);
      }}
    >
      <ListItemIcon className={classes.icon}>
        <Language />
      </ListItemIcon>
      Switch Language
    </MenuItem>
  );
});

const MyUserMenu = (props) => {
  const classes = useUserStyles();
  return (
    <UserMenu {...props} classes={classes}>
      <SwitchLanguage />
    </UserMenu>
  );
};

const useUserStyles = makeStyles((theme) => ({
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
    color: "red",
    padding: 0,
    fontSize: "inherit",
    transition: "none",
    lineHeight: "inherit",
  },
}));

const MyAppBar = memo((props) => {
  const classes = useBarStyles();
  return (
    <AppBar
      {...props}
      userMenu={<MyUserMenu />}
      className={classnames(classes.root, "tui-nav no-shadow")}
    />
  );
});

const useBarStyles = makeStyles((theme) => ({
  root: {
    height: 26,
    lineHeight: "26px",
    color: "black",
    "& div": {
      height: "inherit",
      lineHeight: "inherit",
      minHeight: "unset",
    },
  },
}));

export default (props) => (
  <Layout
    {...props}
    appBar={MyAppBar}
    menu={MyMenu}
    className="tui-bg-blue-black"
  />
);
