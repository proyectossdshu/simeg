import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const drawerWidth = 240;
const navItems = [
  { name: "Inicio", anchor: "incio" },
  { name: "¿Qué es el simeg?", anchor: "simeg" },
  { name: "Recomendaciones", anchor: "recomendaciones" },
  { name: "Programas evaluados", anchor: "programas" },
];

const Header = (props) => {
  const { _window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [show, setShow] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <Link
                  onClick={handleDrawerToggle}
                  to={item.anchor}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {item.name}
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    _window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} id="inicio">
      {show && (
        <AppBar
          component="nav"
          sx={{ height: "80px", backgroundColor: "#fff", position: "fixed" }}
          className="nav"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon sx={{ color: "#ccc" }} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              MUI
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }, padding: "2rem" }}>
              {navItems.map((item, idx) => (
                <Link
                  to={item.anchor}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <Button key={idx} sx={{ color: "#000", fontSize: "16px" }}>
                    {item.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      )}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
