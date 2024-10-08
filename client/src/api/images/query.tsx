import { useQuery } from "react-query";

import {
  queryImage,
} from "./fetch";
import { QueryImageProps } from "./types";

export const useQueryImage = ({
  photoName,
  pageNumber,
  orderBy,
}: QueryImageProps) => {
  return useQuery(
    {
      queryKey: ["images", "photo", "user"],
      queryFn: () => queryImage({ photoName, pageNumber, orderBy }),
      cacheTime: 0,
    },
  );
};
// export const useQueryPhotoStatistics = ({ id }: { id: string }) => {
//   return useQuery(["photo", "statistics"], () => getPhotoStatistics({ id }));
// };
// export const useQueryUserStatistics = ({ name }: { name: string }) => {
//   return useQuery(["photo", "statistics"], () => getUserStatistics({ name }));
// };
// export const useQueryUserPhotos = ({ name }: { name: string }) => {
//   return useQuery(["photo", "user"], () => getUserPhotos({ name }));
// };
