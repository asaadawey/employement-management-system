import { makeStyles } from "@material-ui/core";

export const useRouterStyles = makeStyles(() => ({
  root: { display: "flex" },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));
