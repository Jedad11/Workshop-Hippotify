import * as userModel from "../models/userModel.js"

const userId = 26;

export const getUser = async (req, res) => {
    try {
      const response = await userModel.getUser(userId);

      return res.status(200).json({
        success: true,
        data: response,
        message: "User retrieved successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        data: null,
        message: "Internal server error",
      });
    }
  }