export type OrderBySearch =
    | "latest"
    | "oldest"
    | "popular"
    | "views"
    | "downloads";

export interface GetImagesParamsTypes {
    pageNumber: number,
    photoName: string,
    orderBy: OrderBySearch
}