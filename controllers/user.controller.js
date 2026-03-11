import User from "../model/user.model.js"

async function addUser(req,res){
    try{
        let newUser =req.body
        let {mobile,email,sic} = newUser
        let user=await User.findOne({$or:[{"mobile": mobile},{"email":email},{"sic":sic}]})

        if(user){
            return res.status(400).json({"message": "Mobile,email or sic already exists"})
        }
        newUser = await User.create(newUser)
        res.status(201).send(newUser)
    }
    catch(error){
        console.log(error);
        res.status(3400).send({"message":"User not added","error":error.message})
        
    }
}

async function allUsers(req,res) {
    try{
        let users=await User.find()
        console.log(users);
        res.send(users)
    }
    catch(error){
        console.log(error);
        res.status(400).send({"message": "User not found","error": error.message})
        
    }
    
}
// d. Retrieve a single user based on SIC/email/mobile
// e. Update a student
// f. Delete a student

async function getUserById(req, res){
    try {
        let { id1 } = req.params
        let user = await User.findOne({id: id1})
        if(user){
            res.send(user)
        } else {
            res.status(404).send({"message": "User not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({"message": "user not found", "error": error.message})
    }
}

async function getUserBySicEmailNumber(req, res){
    try {
        let { sen } = req.params
        let user = await User.findOne({$or:[{"mobile": sen},{"email": sen},{"sic": sen}]})
        if(user){
            res.send(user)
        } else {
            res.status(404).send({"message": "User not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({"message": "user not found", "error": error.message})
    }
}

async function updateUser(req, res){
    try {
        let { id1 } = req.params
        let updatedUser = req.body

        updatedUser = await User.findOneAndUpdate({id: id1}, updatedUser, {returnDocument: "after"})
        if(updatedUser !== null){
            res.send(updatedUser)
        } else {
            res.status(404).send({"message": "User not found"})
        }
    } catch (error) {
       console.log(error)
        res.status(400).send({"message": "user not Updated", "error": error.message})
    }
}

async function deleteUser(req, res){
    try {
        let { id1 } = req.params

        let user = await User.findOneAndDelete({id: id1})
        if(user !== null){
            res.send({"message": "User Deleted"})
        } else {
            res.status(404).send({"message": "User not found"})
        }
    } catch (error) {
       console.log(error)
        res.status(400).send({"message": "user not Updated", "error": error.message})
    }
}

export {addUser, allUsers, getUserById, getUserBySicEmailNumber,updateUser,deleteUser}
