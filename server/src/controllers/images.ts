import { Request, Response } from "express"

import { queryImages } from "../api/images"
import { GetImagesParamsTypes } from "../types/images"

export const getImages = async (req: Request<{}, {}, {}, GetImagesParamsTypes>, res: Response) => {
    try {
        const images = await queryImages({ ...req.query })
        return res.json(images).status(200)
    } catch (error) {
        res.send(error).status(500)
    }
}