import {
  Divider,
  Drawer as MUIDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { RouterLinks } from "../../../router/router.items";
import { listItems } from "./drawer.items";
import { useDrawerStyles } from "./drawer.styles";

export interface DrawerProps {
  handleCloseDrawer: () => void;
  isDrawerOpen: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ handleCloseDrawer, isDrawerOpen }) => {
  const classes = useDrawerStyles();

  const { t } = useTranslation();

  const history = useHistory();

  const handleOnListItemClick = (link: RouterLinks) => {
    history.push(link);
  };
  return (
    <MUIDrawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !isDrawerOpen && classes.drawerPaperClose
        ),
      }}
      open={isDrawerOpen}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleCloseDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <Divider />
      <List>
        {/* Iterate over list items map , which conagtins all of pages */}
        {listItems.map(({ icon, label, link }, i) => (
          <ListItem onClick={() => handleOnListItemClick(link)} key={i} button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={t(label)} />
          </ListItem>
        ))}
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
