import { Router } from "express";
import { verifyToken,isAdmin, checkRolesExisted, checkDuplicateUsernameOrEmail } from "../middlewares/index";
import * as userCtrl from "../controllers/user.controller";

const router = Router()

router.post('/', [
    verifyToken,
    isAdmin,
    checkRolesExisted,
    checkDuplicateUsernameOrEmail
],userCtrl.createUser);

export default router;