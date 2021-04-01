//getAllUsers,getOneUser,addOneUser,updateOneUser,deleteOneUser
//{firstName,lastName,email,role,password,createdAt,about,place,website,profil_image,blocked,resetPasswordToken,resetPasswordExpire}
const User = require('../models/User')


module.exports = {
    getAllUsers: async (req, res, next) => {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: "salut les users",
            data: users
        })
    },
    getOneUser: async (req, res, next) => {
        const id = req.params.id;
        console.log("getOneUser id : " + id)
        const user = await User.findById(id);
        res.status(200).json({
            success: true,
            message: "user details",
            data: user
        })
    },
    addOneUser: async (req, res, next) => {
        const information = req.body;
        const user = await User.create({
            ...information
        })
        res.status(200).json({
            success: true,
            message: "user created",
            data: user
        })

    },
    updateOneUser: async (req, res, next) => {
        const id = req.params.id;
        const {firstName, lastName, email, role, password} = req.body;
        console.log("update icin id : " + id);
        const updateQuery = {firstName, lastName, email, role, password};

        const user = await User.findByIdAndUpdate(id, updateQuery, {new: true});
        res.status(200).json({
            success: true,
            message: "user updated!",
            data: user
        })
    },
    deleteOneUser: async (req, res, next) => {
        const id = req.params.id;
        console.log("delete icin id : " + id);
        const user = await User.findByIdAndRemove(id);
        res.status(200).json({
            success: true,
            message: "user deleted!",
            data: user
        })
    }
}



