import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSession } from "../contexts";
import { useAuth } from "../hooks";

const drawerWidth = 280;

export function UserSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
    navigate("/");
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          height: "100%",
          background: "linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%)",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", py: 2 }}>
        <img src="/logo.png" alt="Logo" width="80" />
        <Typography variant="caption" component="div" sx={{ textTransform: "uppercase", color: "grey.800" }}>
          Portal Acadêmico
        </Typography>
      </Box>

      <List sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" selected={pathname === "/"}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/classes" selected={pathname === "/classes"}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Disciplinas" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/documents" selected={pathname === "/documents"}>
            <ListItemIcon>
              <HistoryEduIcon />
            </ListItemIcon>

            <ListItemText primary="Solicitar Documentos" />
          </ListItemButton>
        </ListItem>

        <Box sx={{ flexGrow: 1 }} />

        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
