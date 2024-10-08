import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { useLocation, useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import CardMedia from "@mui/material/CardMedia";
import { useTranslation } from "react-i18next";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
import "moment/dist/locale/he";
import "moment/dist/locale/fr";
import "moment/dist/locale/ja";
import "moment/dist/locale/da";
import "moment/dist/locale/es";
import "moment/dist/locale/it";
import "moment/dist/locale/ko";
import "moment/dist/locale/pt";
import moment from "moment";

import Shares from "../buttons/Shares";
import MenuCard from "../buttons/MenuCard";
import LikeCard from "../buttons/LikeCard";
import { Results } from "../../api/images/types";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface CreateCardsProps {
  res: Results;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  //   const { expand, ...other } = props;
  const { expand, ...other } = props;
  return <IconButton aria-expanded={expand} {...other} />;
})(({ theme, expand }) => {
  return {
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  };
});

function CreateCards(props: CreateCardsProps) {
  const { res } = props;
  const trans = useTranslation();

  const photoStatistics = trans.t("photoStatistics");
  const userStatistics = trans.t("userStatistics");
  const portfolio = trans.t("portfolio");
  const location = trans.t("location");
  const language = trans.i18n.language !== "he-IL" ? trans.i18n.language : "en";
  moment.locale(language);

  const alt =
    res?.alternative_slugs[
      trans.i18n.language as keyof Results["alternative_slugs"]
    ]?.replace(/-/g, " ") ??
    res?.alt_description ??
    " ";

  const createdAt = res.created_at;
  const user = res.user;
  const userPortfolio = res.user.social?.portfolio_url;
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [share, setShare] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const open = Boolean(anchorEl);
  const liked = false;
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card>
        <CardHeader
          avatar={<Avatar src={user.profile_image.small} />}
          action={
            <>
              <IconButton aria-label="settings" onClick={handleClick}>
                {!user.location && pathname !== "/search" ? (
                  ""
                ) : (
                  <MoreVertIcon />
                )}
              </IconButton>
              <MenuCard
                anchorEl={anchorEl}
                handleClose={handleClose}
                location={location}
                open={open}
                photoId={res.id}
                photoStatistics={photoStatistics}
                tags={res.tags}
                url={{ regular: res.urls.regular, thumb: res.urls.thumb }}
                userName={user.name}
                userStatistics={userStatistics}
                userPortfolio={portfolio}
                urlProtfolio={userPortfolio}
              />
            </>
          }
          title={
            <Button
              sx={{ textAlign: "center", textWrap: "nowrap" }}
              disabled={pathname !== "/search"}
              onClick={() => navigate(`/userPhotos/${user.username}`)}
            >
              {user.name}
            </Button>
          }
          subheader={moment(createdAt).format("LL")}
        />
        <CardMedia
          component="img"
          height="300"
          image={res.urls.small}
          alt={alt}
        />
        <CardContent sx={{ maxHeight: "90px", height: "90px" }}>
          <Typography component="span" variant="body2" color="text.secondary">
            {alt}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <LikeCard liked={liked} img={res} />
          <IconButton onClick={() => setShare(!share)} aria-label="share">
            <ShareIcon />
          </IconButton>
          {res?.tags && res?.tags?.length > 0 && pathname !== "/liked" && (
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          )}
        </CardActions>
        {pathname !== "/liked" && (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {res?.tags?.map((tag, index) => {
                return (
                  <Typography component="span" key={index}>
                    {tag?.source?.cover_photo?.alternative_slugs[
                      language as keyof Results["alternative_slugs"]
                    ] ?? tag.title}
                    hi
                  </Typography>
                );
              })}
            </CardContent>
          </Collapse>
        )}
      </Card>
      <Shares open={share} setOpen={setShare} url={res.urls.full} />
    </div>
  );
}

export default CreateCards;
