import axios from "axios";
import { UserDetailsBack } from "./types";
import { Results } from "../images/types";

export const addUser = async ({
  email,
  name,
  password,
}: {
  name: string;
  password: string;
  email: string;
}) => {
  const adding = await axios.post<UserDetailsBack>(
    `http://localhost:3000/user/addUser`,
    null,
    {
      params: {
        name,
        password,
        email,
      },
    }
  );
  return adding.data;
};
export const addUserLike = async ({
  userId,
  photoId,
  img,
}: {
  userId: string;
  photoId: string;
  img: Results;
}) => {
  await axios.post<UserDetailsBack>(
    `http://localhost:3000/likes/addLikesByUser?userId=${userId}&photoId=${photoId}`,
    img
  );
};

export const getUser = async ({
  name,
  password,
}: {
  name: string;
  password: string;
}) => {
  const res = axios
    .get<UserDetailsBack>(`http://localhost:3000/user/getUser`, {
      params: { name, password },
    })
    .then((res) => res.data);
  return res;
};
export const getUserLiked = async ({ userId }: { userId: string }) => {
  const res = axios
    .get<Results[]>(
      `http://localhost:3000/likes/getLikeByUser?userId=${userId}`
    )
    .then((res) => res.data);
  return res;
};
export const getIdLikesByUser = async ({ userId }: { userId: string }) => {
  const res = axios
    .get<string[]>(
      `http://localhost:3000/likes/getIdLikeByUser?userId=${userId}`
    )
    .then((res) => res.data);
  return res;
};
