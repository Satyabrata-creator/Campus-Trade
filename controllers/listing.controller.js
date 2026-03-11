import listing from "../model/listing.model.js";

async function addListing(req, res) {
    try {
        let newListing = req.body
        newListing.listingImage = req.file.filename
        newListing = await listing.create(newListing)
        res.send(newListing)
    } catch (error) {
        console.log(error)
        res.status(400).send({"message": "Listing not added", "error": error.message})
    }
}

async function allListings(req, res){
    try {
        let listings = await listing.find().populate("ownerId", "-password")
        listings.forEach( e => e.listingImage = "http://localhost:5000/uploads/"+e.listingImage)
        res.send(listings)
    } catch (error) {
        console.log(error)
        res.status(400).send({"message": "Event not found", "error": error.message})
    }
}

async function getListingById(req, res) {
    try {

        const { id } = req.params

        let listingData = await listing
            .findById(id)
            .populate("ownerId", "-password")

        if (!listingData) {
            return res.status(404).send({
                message: "Listing not found"
            })
        }

        listingData.imageName =
            "http://localhost:5000/uploads/" + listingData.imageName

        res.send(listingData)

    } catch (error) {
        console.log(error)

        res.status(400).send({
            message: "Listing not found",
            error: error.message
        })
    }
}
async function updateListing(req, res) {
    try {

        const { id } = req.params

        let updatedListing = await listing.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        if (!updatedListing) {
            return res.status(404).send({
                message: "Listing not found"
            })
        }

        res.send(updatedListing)

    } catch (error) {
        console.log(error)

        res.status(400).send({
            message: "Listing not updated",
            error: error.message
        })
    }
}

async function updateListingImage(req, res) {
    try {

        const { id } = req.params

        if (!req.file) {
            return res.status(400).send({
                message: "Image file missing"
            })
        }

        let updatedListing = await listing.findByIdAndUpdate(
            id,
            { imageName: req.file.filename },
            { new: true }
        )

        if (!updatedListing) {
            return res.status(404).send({
                message: "Listing not found"
            })
        }

        res.send(updatedListing)

    } catch (error) {
        console.log(error)

        res.status(400).send({
            message: "Image not updated",
            error: error.message
        })
    }
}

async function deleteListing(req, res) {
    try {

        const { id } = req.params

        let deletedListing = await listing.findByIdAndDelete(id)

        if (!deletedListing) {
            return res.status(404).send({
                message: "Listing not found"
            })
        }

        res.send({
            message: "Listing deleted successfully"
        })

    } catch (error) {
        console.log(error)

        res.status(400).send({
            message: "Listing not deleted",
            error: error.message
        })
    }
}
export { addListing,allListings,getListingById,updateListing,updateListingImage,deleteListing }