import * as React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function Header(props) {
  const { sections } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {sections.map((section) => (
          <ListItem key={section} disablePadding>
            <ListItemButton component="a" href={section.url} sx={{ textAlign: "center" }}>
              <ListItemText primary={section.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Toolbar
        component="div"
        variant="dense"
        sx={{
          justifyContent: { xs: "start", sm: "end" },
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        {sections.map((section) => (
          <Button
            href={section.url}
            size="large"
            startIcon={section.icon}
            sx={{
              p: 1,
              flexShrink: 0,
              display: { xs: "none", sm: "inline-flex" },
            }}
          >
            {section.title}
          </Button>
        ))}
      </Toolbar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Outlet />
    </>
  );
}
