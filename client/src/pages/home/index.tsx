import { useTranslation } from "react-i18next";

import showMorePhotoFromArtist from "../../../public/images/show_more_photo_from_artist.png";
import seePhotoStatistics from "../../../public/images/see_photo_statistics.png";
import seeUserStatistics from "../../../public/images/see_user_statistics.png";
import CarouselComponent from "../../components/CarouselComponent";
import searchImage from "../../../public/images/searchImages.png";
import seeMoreOnMap from "../../../public/images/see_on_map.png";
import SearchImg from "../../components/SearchImg";
import { useLocation } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  const photos: { lable: string; imgSrc: string }[] = [
    { imgSrc: searchImage, lable: t("searchImage") },
    { imgSrc: seeMoreOnMap, lable: t("seeMoreOnMap") },
    { imgSrc: showMorePhotoFromArtist, lable: t("showMorePhotoFromArtist") },
    { imgSrc: seeUserStatistics, lable: t("seeUserStatistics") },
    { imgSrc: seePhotoStatistics, lable: t("seePhotoStatistics") },
  ];
  const { pathname } = useLocation();

  return (
    <div
      style={{
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {pathname !== "/" && (
        <div style={{ height: "20%" }}>
          <SearchImg />
        </div>
      )}
      <div
        style={{
          direction: "ltr",
          height: "60%",
          maxHeight: "60%",
          width: "60%",
        }}
      >
        <CarouselComponent photos={photos} />
      </div>
    </div>
  );
}

export default Home;
