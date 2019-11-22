import * as jwt from "jsonwebtoken";
import config from "../config";
export function checkUser(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];

  try {
    let decoded = jwt.verify(token, config.JWT_AUTH_USER);
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "User unauthorized"
    });
  }
}
