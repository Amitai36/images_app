import express from "express";

import images from "./routes/images";

const app = express();

app.use("/images", images)
export default app;
