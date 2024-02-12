import styled from "@emotion/styled";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import List from "@mui/material/List";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import InfoIcon from "@mui/icons-material/Info";
import Divider from "@mui/material/Divider";
import ViewListIcon from "@mui/icons-material/ViewList";
import { FC } from "react";
import { ROUTES } from "config/router";
import { NavLink } from "react-router-dom";
import { blue } from "@mui/material/colors";

const StyledLink = styled(NavLink)(({ theme }) => ({
  display: "block",
  textDecoration: "none",
  color: "black",

  "&.active": {
    backgroundColor: blue[500],
    color: "white",

    "& .MuiSvgIcon-root": { fill: "white" },
  },
}));

interface ISidebarProps {
  //...
}

const SidebarNav: FC<ISidebarProps> = () => {
  return (
    <List component="nav">
      <StyledLink to="/publications">
        <ListItemButton>
          <ListItemIcon>
            <ViewListIcon />
          </ListItemIcon>
          <ListItemText primary="Публікації" />
        </ListItemButton>
      </StyledLink>

      <StyledLink to={ROUTES.USERS}>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Користувачі" />
        </ListItemButton>
      </StyledLink>

      <StyledLink to={ROUTES.SUBSCRIBERS}>
        <ListItemButton>
          <ListItemIcon>
            <MarkunreadIcon />
          </ListItemIcon>
          <ListItemText primary="Підписники" />
        </ListItemButton>
      </StyledLink>

      <StyledLink to={ROUTES.ABOUT}>
        <ListItemButton>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>

          <ListItemText primary="Про нас" />
        </ListItemButton>
      </StyledLink>

      <Divider sx={{ my: 4 }} />

      {/* <ListSubheader
              component="div"
              inset
            >
              Saved reports
            </ListSubheader>

            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Current month" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Last quarter" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Year-end sale" />
            </ListItemButton> */}
    </List>
  );
};

export default SidebarNav;
