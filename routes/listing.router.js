import express from 'express'

import {
    addListing,allListings,getListingById,updateListing,updateListingImage,deleteListing
} from "../controllers/listing.controller.js"

import upload from '../midddleware/fileUpload.middleware.js'

const router = express.Router()


router.post("/", upload.single("listingImage"), addListing)
router.get("/", allListings)
router.get("/:id", getListingById)
router.put("/:id", updateListing)
router.put("/image/:id", upload.single("imageName"), updateListingImage)
router.delete("/:id", deleteListing)


export default router