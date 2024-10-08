import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuCardProps {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  photoStatistics: string;
  url: { thumb: string; regular: string };
  userStatistics: string;
  userPortfolio?: string;
  urlProtfolio?: string;
  userName: string;
  location: string;
  tags?: { title: string }[];
  photoId: string;
  open: boolean;
}

function MenuCard(props: MenuCardProps) {
  const {
    anchorEl,
    handleClose,
    photoStatistics,
    url: { regular, thumb },
    location,
    userName,
    userPortfolio,
    userStatistics,
    photoId,
    tags,
    open,
    urlProtfolio,
  } = props;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {pathname === "/search" && (
        <div>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate(`photoStatistics/${photoId}`, {
                state: { url: regular },
              });
            }}
          >
            {photoStatistics}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate(`/userStatistics/${userName}`);
            }}
          >
            {userStatistics}
          </MenuItem>
          {urlProtfolio && (
            <MenuItem
              onClick={() => {
                handleClose();
                window.open(urlProtfolio, "_blank");
              }}
            >
              {userPortfolio}
            </MenuItem>
          )}
        </div>
      )}
      {location && (
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/map", {
              state: {
                location: location ?? "",
                title: tags ? tags[0].title : "",
                url: thumb ?? "",
              },
            });
          }}
        >
          {location}
        </MenuItem>
      )}
    </Menu>
  );
}

export default MenuCard;
