import * as React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItemLink, getResources } from "react-admin";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

const Menu = ({}) => {
  const resources = useSelector(getResources);
  const classes = useStyles();

  const posts = resources[0];
  console.log(posts);
  return (
    <nav className={classnames(classes.root, "tui-sidenav active")}>
      {posts && (
        <ul>
          <li>
            <MenuItemLink
              to={{ pathname: `/${posts.name}` }}
              primaryText={(posts.options && posts.options.label) || posts.name}
              sidebarIsOpen={true}
            />
          </li>
        </ul>
      )}
      <ul>
        {resources
          .filter((item, index) => index > 0)
          .map((resource) => (
            <li key={resource.name}>
              <MenuItemLink
                to={{ pathname: `/${resource.name}` }}
                primaryText={
                  (resource.options && resource.options.label) || resource.name
                }
                sidebarIsOpen={true}
              />
            </li>
          ))}
      </ul>
    </nav>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(4),
    "& ul": {
      marginTop: -2,
      textTransform: "capitalize",
      "& a": {
        paddingLeft: 0,
        color: "black",
        font: "inherit",
      },
      "&:first-child": {
        marginTop: 20,
      },
    },
  },
}));

export default withRouter(Menu);
