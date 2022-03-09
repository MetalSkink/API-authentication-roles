import * as authCtrl from '../controllers/auth.controller'
import { Router } from "express";
import { checkDuplicateUsernameOrEmail, checkRolesExisted } from "../middlewares/index";

const router = Router()


router.post('/signup',[checkDuplicateUsernameOrEmail, checkRolesExisted] ,authCtrl.signUp);
router.post('/signin', authCtrl.signIn);

export default router;