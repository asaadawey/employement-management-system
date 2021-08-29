import React, { lazy, LazyExoticComponent } from "react";

export enum RouterLinks {
  home = "/",
}

interface RouterItemProps {
  component: LazyExoticComponent<React.ComponentType<any>>;
  path: RouterLinks;
}

const routerItems: RouterItemProps[] = [
  {
    component: lazy(() => import("../pages/home/home.component")),
    path: RouterLinks.home,
  },
];

export default routerItems;
