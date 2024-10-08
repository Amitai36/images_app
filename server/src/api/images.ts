import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com"

import { unsplashKey } from "../config";
import { OrderBySearch } from "../types/images";

export const queryImages = async ({
    photoName,
    pageNumber,
    orderBy,
}: {
    photoName: string;
    pageNumber: number;
    orderBy: OrderBySearch;
}) => {
    const res = axios
        .get(
            `search/photos?page=${pageNumber}&query=${photoName}&client_id=${unsplashKey}&per_page=30&order_by=${orderBy}`
        )
        .then((res) => res.data);

    return res;
};

export const getPhotoStatistics = async ({ id }: { id: string }) => {
    const res = axios
        .get(
            `photos/${id}/statistics?&client_id=${unsplashKey}`
        )
        .then((res) => res.data);

    return res;
};
export const getUserStatistics = async ({ name }: { name: string }) => {
    const res = axios
        .get(
            `users/${name}/statistics?&client_id=${unsplashKey}`
        )
        .then((res) => res.data);

    return res;
};
export const getUserPhotos = async ({ name }: { name: string }) => {
    const res = axios
        .get(
            `users/${name}/photos?&client_id=${unsplashKey}&per_page=30`
        )
        .then((res) => res.data);
    return res;
};
