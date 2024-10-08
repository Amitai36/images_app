import axios from "axios";
import {
  FetchRes,
  OrderBySearch,
} from "./types";


export const queryImage = async ({
  photoName,
  pageNumber,
  orderBy,
}: {
  photoName: string;
  pageNumber: number;
  orderBy: OrderBySearch;
}) => {
  const res = axios
    .get<FetchRes>(
      `images?photoName=${photoName}&orderBy=${orderBy}&pageNumber=${pageNumber}`
    )
    .then((res) => res.data);

  return res;
};