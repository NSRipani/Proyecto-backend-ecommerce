import { Router } from "express";
import apiRouter from "./apis/api.index.js";
import viewRouter from './view/index.view.js';
// import cartView from "./view/view.carts.js";

const router = Router()

router.use("/api", apiRouter)
router.use("/api", viewRouter)
// router.use("/api", cartView)

export default router;