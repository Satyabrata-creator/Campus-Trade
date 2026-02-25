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

export {addUser}
