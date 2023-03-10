

// Users registration:
// Users will get a welcome email here on registration
const NewUsersRegistration = async(req, res) =>{
    try {
        const { name, email, password } = req.body;
         
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in registering new users",
            data: error
        })
    }
}