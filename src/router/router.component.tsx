import { CssBaseline } from "@material-ui/core";
import { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Drawer from "../components/ui/drawer/drawer.component";
import Header from "../components/ui/header/header.component";
import routerItems from "./router.items";
import { useRouterStyles } from "./router.styles";

export interface RouterProps {}

const Router: React.FC<RouterProps> = () => {
  const classes = useRouterStyles();
  // Handle if drawer is opened or not
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Header
          isDrawerOpened={isDrawerOpened}
          handleOpenDrawer={() => {
            //Change the value of the current header state
            setIsDrawerOpened((current) => !current);
          }}
        />
        <CssBaseline />
        <Drawer
          handleCloseDrawer={() => {
            //Change the value of the current header state
            setIsDrawerOpened((current) => !current);
          }}
          isDrawerOpen={isDrawerOpened}
        />
        <div className={classes.content}>
          <Switch>
            {/* Iterate over all router items */}
            {routerItems.map(({ component, path }, i) => (
              <Route key={i} component={component} path={path} />
            ))}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
