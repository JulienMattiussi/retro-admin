import * as React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate, MenuItemLink, getResources } from "react-admin";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

const Menu = ({}) => {
  const resources = useSelector(getResources);
  const classes = useStyles();
  const translate = useTranslate();

  const posts = resources[0];
  return (
    <nav className={classnames(classes.root, "tui-sidenav", "active")}>
      {posts && (
        <ul>
          <li>
            <MenuItemLink
              to={{ pathname: `/${posts.name}` }}
              primaryText={translate(
                `resources.${(posts.options && posts.options.label) ||
                  posts.name}.name`,
                {
                  smart_count: 2,
                }
              )}
            />
          </li>
        </ul>
      )}
      <ul>
        {resources
          .filter((_, index) => index > 0)
          .map((resource) => (
            <li key={resource.name}>
              <MenuItemLink
                to={{ pathname: `/${resource.name}` }}
                primaryText={translate(
                  `resources.${(resource.options && resource.options.label) ||
                    resource.name}.name`,
                  {
                    smart_count: 2,
                  }
                )}
              />
            </li>
          ))}
      </ul>
    </nav>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(1),
    "& ul": {
      marginTop: -2,
      textTransform: "capitalize",
      "& a": {
        paddingLeft: 0,
        color: "black",
      },
      "&:first-child": {
        marginTop: 20,
      },
    },
  },
}));

export default withRouter(Menu);
