import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";

import { Results } from "../../api/images/types";

interface LikeCardProps {
  img: Results;
  liked: boolean;
}

function LikeCard(props: LikeCardProps) {
  const { liked } = props;

  return (
    <IconButton >
      {liked ? <Favorite /> : <FavoriteBorderOutlined />}
    </IconButton>
  );
}

export default LikeCard;
