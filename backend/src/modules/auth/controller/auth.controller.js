import { asyncHandler } from "../../../utils/asyncHandler.js";



const loginController = asyncHandler(async(req,res) => {
    const {username, email, password, role} = req.body;
})

const registerController = asyncHandler(async(req,res) => {
    const {username, email, password, role} = req.body;
})