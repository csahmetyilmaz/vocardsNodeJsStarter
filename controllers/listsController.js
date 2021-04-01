//{getAllLists,getOneList,addOneList,updateOneList,deleteOneList}
//{title,description,author,shared_with,createdAt,updatedAt}
const List = require('../models/List');

module.exports = {
    getAllLists: async (req, res, next) => {
        const lists = await List.find();
        res.status(200).json({
            success: true,
            message: "salut les lists",
            data: lists
        })
    },
    getOneList: async (req, res, next) => {
        const id = req.params.id;
        console.log("getOneList id : " + id)
        const list = await List.findById(id);
        res.status(200).json({
            success: true,
            message: "list details",
            data: list
        })
    },
    addOneList: async (req, res, next) => {
        const information = req.body;
        const list = await List.create({
            ...information
        })
        res.status(200).json({
            success: true,
            message: "list created",
            data: list
        })

    },
    updateOneList: async (req, res, next) => {
        const id = req.params.id;
        const {title, description, author, shared_with, createdAt, updatedAt} = req.body;
        console.log("update list icin id : " + id);
        const updateQuery = {title, description, author,shared_with, createdAt, updatedAt};

        const list = await List.findByIdAndUpdate(id, updateQuery, {new: true},(err,list)=>{
            return list;
        });
        res.status(200).json({
            success: true,
            message: "list updated!",
            data: list
        })
    },
    deleteOneList: async (req, res, next) => {
        const id = req.params.id;
        console.log("delete icin id : " + id);
        const list = await List.findByIdAndRemove(id);
        res.status(200).json({
            success: true,
            message: "list deleted!",
            data: list
        })
    }
}



