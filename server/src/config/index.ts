import dotenv from "dotenv";
dotenv.config();

export const port = process.env["PORT"];
export const unsplashKey = process.env["UNSPLASH_KEY"]
