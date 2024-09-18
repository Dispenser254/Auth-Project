import User from "../models/user.model.js";
import { errorHandler } from "../utils/errorHandler.js";

export const getUser = async (request, response, next) => {
  try {
    const user = await User.findById(request.params.userId);
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }
    const { password, ...rest } = user._doc;
    response.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const signout = (request, response, next) => {
  try {
    response
      .clearCookie("access_token")
      .status(200)
      .json("User has been signed out");
  } catch (error) {
    next(error);
  }
};
