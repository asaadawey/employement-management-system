import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import { useHeaderStyles } from "./header.styles";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export interface HeaderProps {
  handleOpenDrawer: () => void;
  isDrawerOpened: boolean;
}

const Header: React.FC<HeaderProps> = ({
  handleOpenDrawer,
  isDrawerOpened,
}) => {
  const classes = useHeaderStyles();
  const { t } = useTranslation();
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, isDrawerOpened && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {t("TITLE")}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
