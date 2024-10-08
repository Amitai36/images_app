import { Router } from "express";

import { getImages } from "../controllers/images";

const router = Router();

//get req
router.get("/", getImages);

export default router;
