import * as React from "react";
import { forwardRef, memo } from "react";
import { Layout, AppBar, UserMenu, useLocale, useSetLocale } from "react-admin";
import { MenuItem, ListItemIcon, MenuItemProps } from "@material-ui/core";
import Language from "@material-ui/icons/Language";
import { makeStyles } from "@material-ui/core/styles";
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
  return (
    <UserMenu {...props}>
      <SwitchLanguage />
    </UserMenu>
  );
};

const MyAppBar = memo((props) => {
  return <AppBar {...props} userMenu={<MyUserMenu />} />;
});

export default (props) => <Layout {...props} appBar={MyAppBar} menu={MyMenu} />;
