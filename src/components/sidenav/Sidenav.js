import React from "react";
import "./Sidenav.scss";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import CollectionsIcon from "@mui/icons-material/Collections";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InfoIcon from "@mui/icons-material/Info";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import WorldShuttersLogo from "../../images/logo/World Shutters.png";
import InstagramIcon from "../../images/social media icons/instagram-icon.png";
import TwitterIcon from "../../images/social media icons/twitter-icon.png";

const drawerWidth = 240;

function Sidenav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [gallery, setGallery] = useState("");

  const handleChange = (event) => {
    setGallery(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="nav-container">
      <Link to="/">
        <Box
          component="img"
          sx={{
            width: {
              xs: "150px",
              md: "200px",
            },
            height: "auto",
            borderRadius: {
              xs: 20,
              md: 30,
            },
            ml: {
              xs: "45px",
              sm: 0,
            },
          }}
          src={WorldShuttersLogo}
        ></Box>
      </Link>
      <List>
        {["About", "Galleries", "Shop", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            {text === "Galleries" ? (
              <Link>
                <ListItemButton>
                  <ListItemIcon>
                    <CollectionsIcon />
                  </ListItemIcon>
                  <FormControl variant="standard" sx={{ minWidth: "60%" }}>
                    <InputLabel id="galleries-label">{text}</InputLabel>
                    <Select
                      value={gallery}
                      onChange={handleChange}
                      labelId="galleries-label"
                    >
                      <Link to="/Galleries">
                        <MenuItem value="Galleries">Galleries</MenuItem>
                      </Link>
                      <Link to="/Landscapes">
                        <MenuItem value="Landscapes">Landscapes</MenuItem>
                      </Link>

                      <Link to="/Animals">
                        <MenuItem value="Animals">Animals</MenuItem>
                      </Link>

                      <Link to="/Cityscapes">
                        <MenuItem value="Cityscapes">Cityscapes</MenuItem>
                      </Link>

                      <Link to="/People">
                        <MenuItem value="People">People</MenuItem>
                      </Link>
                    </Select>
                  </FormControl>
                </ListItemButton>
              </Link>
            ) : (
              <>
                {text !== "Shop" ? (
                  <Link to={"/" + text}>
                    <ListItemButton>
                      <ListItemIcon>
                        {text === "About" ? <InfoIcon /> : <></>}
                        {text === "Galleries" ? <CollectionsIcon /> : <></>}
                        {text === "Contact" ? <MailIcon /> : <></>}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </Link>
                ) : (
                  <a href="https://etsy.com" target="_blank">
                    <ListItemButton>
                      <ListItemIcon>
                        <ShoppingBagIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </a>
                )}
              </>
            )}
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: "2%",
          mt: "auto",
          //ml:'5%'
        }}
      >
        <Box
          component="a"
          href="https://instagram.com"
          target="_blank"
          sx={{ width: "20%", height: "auto" }}
        >
          <Box
            component="img"
            sx={{ width: "100%", height: "auto" }}
            src={InstagramIcon}
          ></Box>
        </Box>
        <Box
          component="a"
          href="https://twitter.com"
          target="_blank"
          sx={{ width: "20%", height: "auto" }}
        >
          <Box
            component="img"
            sx={{ width: "100%", height: "auto" }}
            src={TwitterIcon}
          ></Box>
        </Box>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className="Sidenav">
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          height: "100%",
        }}
        aria-label="mailbox folders"
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, ml: 1, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
              height: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100%",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
}

export default Sidenav;
