import * as React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate, MenuItemLink, getResources } from "react-admin";
import { withRouter } from "react-router-dom";

const Menu = ({}) => {
  const resources = useSelector(getResources);
  const translate = useTranslate();

  const posts = resources[0];
  return (
    <nav>
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

export default withRouter(Menu);
