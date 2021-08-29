import React from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { RouterLinks } from "../../../router/router.items";
import { DashboardOutlined } from "@material-ui/icons";

interface ListItemsProps {
  link: RouterLinks;
  icon: React.ReactElement<SvgIconTypeMap>;
  label: string;
}
export const listItems: ListItemsProps[] = [
  {
    icon: <DashboardOutlined />,
    link: RouterLinks.home,
    label: "HOME",
  },
];
