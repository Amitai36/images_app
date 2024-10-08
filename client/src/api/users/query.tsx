import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

import {
  addUser,
  addUserLike,
  getIdLikesByUser,
  getUser,
  getUserLiked,
} from "./fetch";
import { Results } from "../images/types";
import { UserDetails } from "./types";
import { useTranslation } from "react-i18next";

export const useAddUser = () => {
  return useMutation({
    mutationFn: (variables: UserDetails) => {
      return addUser({
        name: variables.name,
        password: variables.password,
        email: variables.email,
      });
    },
    mutationKey: ["user"],
  });
};

export const useAddUserLikes = () => {
  const { t } = useTranslation();
  return useMutation({
    mutationFn: ({
      photoId,
      userId,
      img,
    }: {
      userId: string;
      photoId: string;
      img: Results;
    }) => {
      return addUserLike({
        photoId,
        userId,
        img,
      });
    },
    mutationKey: ["user"],
    onSuccess: () => {
      toast.success(t("We also liked that you liked it"));
    },
  });
};

export const useGetUser = ({
  name,
  password,
}: {
  name: string;
  password: string;
}) => {
  const { t } = useTranslation();
  return useQuery(["user"], () => getUser({ name, password }), {
    enabled: false,
    onError(err: string) {
      console.log(err);
      toast.error(err);
    },
    onSuccess(data) {
      if (typeof data === "string") {
        toast.warning(t(data));
      } else {
        toast.success(`${t("Welcome")} ${data.user_name}`);
      }
    },
  });
};

export const useGetUserLiked = ({ userId }: { userId: string }) => {
  return useQuery(["photo", "user"], () => getUserLiked({ userId }), {
    onError(err: string) {
      console.log(err);
      toast.error(err);
    },
    cacheTime: 0,
  });
};
export const useGetIdLikesByUser = ({ userId }: { userId: string }) => {
  return useQuery(
    ["user", "like", "image", "photo", "idPhoto"],
    () => getIdLikesByUser({ userId: userId! }),
    {
      onError(err: string) {
        console.log(err);
        toast.error(err);
      },
    }
  );
};
