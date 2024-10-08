import { useDarkStore } from "../../store/DarkMode";
import { Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const DarkMode = () => {
  const { darkMode, setDarkMode } = useDarkStore();

  return (
    <Button
      variant="contained"
      onClick={() => setDarkMode(darkMode === "dark" ? "light" : "dark")}
    >
      {darkMode === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
    </Button>
  );
};
export default DarkMode;
