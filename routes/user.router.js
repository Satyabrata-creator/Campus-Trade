// a. Add a user.
// b. Retrieve all users.
// c. Retrieve a single user based on ID
// d. Retrieve a single user based on SIC/email/mobile
// e. Update a student
// f. Delete a student
import express from 'express'

import {addUser, allUsers, deleteUser, getUserById, getUserBySicEmailNumber, updateUser} from "../controllers/user.controller.js"

const router= express.Router()

router.post("/",addUser)
router.get("/",allUsers)
router.get("/:id",getUserById)
router.get("/diff/:sen",getUserBySicEmailNumber)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)


export default router