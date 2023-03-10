const UserModels = require("../Models/usersmodels")

const transporter = require("../Config/mailer")

// Users registration:
// Users will get a welcome email here on registration
const NewUsersRegistration = async(req, res) =>{
    try {
        const { name, email, password } = req.body;

        const users = await UserModels.create({
            name,
            email,
            password
        });

        const welcomeMail = {
            from: "valerianpedro03@gmail.com",
            to: email,
            subject: "Welcome to Sylvia Platform",
            text: `Dear ${users.name}, Thank you for signing up on our platform, we look forward to having you as a registered user. Please refer us and we will serve you to the best of our capacity`
        };

        await transporter.sendMail(welcomeMail, function(error, info){
            if (error) {
                console.log("")
                console.log(error)
                return res.status(500).json({
                    message: "An error occured in sending Welcome Mail"
                })
            } else {
                console.log("")
                console.log("Email sent: ", info)
                return res.status(200).json({
                    message: "Users registered successfully, \n Welcome mail sent to user",
                    data: users
                })
            }
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in registering new users",
            data: error
        })
    }
}

module.exports = NewUsersRegistration