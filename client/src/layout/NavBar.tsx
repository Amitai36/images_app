import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Favorite, Image } from "@mui/icons-material";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import ChosseLang from "../components/languages/ChosseLang";
import SearchImg from "../components/SearchImg";
import DarkMode from "../components/buttons/DarkMode";

interface NavBarProps {
  children?: ReactNode;
}

function NavBar(props: NavBarProps) {
  const components = props?.children;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const buttons = [
    <Button
      key={"icon"}
      color="info"
      onClick={() => navigate("/")}
      size="large"
    >
      <Image fontSize="large" />
      SNAPSEARCH INSIGHT
    </Button>,
    <ChosseLang key={"lang"} />,
    <DarkMode key={"mode"} />,
  ];
  
  return (
    <div style={{ height: "10%" }}>
      <div style={{ height: "10%" }}>
        <AppBar
          sx={{
            backdropFilter: "blur(1px)",
            backgroundColor: "transparent",
          }}
        >
          <Toolbar variant="dense">
            {buttons.map((button) => (
              <div key={button.key} style={{ marginInline: "10px" }}>
                {button}
              </div>
            ))}
            {pathname.includes("search") && (
              <Button onClick={() => navigate("/liked")}>
                <Favorite />
              </Button>
            )}
            {components}
          </Toolbar>
        </AppBar>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
