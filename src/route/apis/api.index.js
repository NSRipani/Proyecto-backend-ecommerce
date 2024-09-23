import { Router } from "express";
import userRoute from "./api.user.js";
import prodRouter from './api.products.js';

const apiRouter = Router();

apiRouter.use("/products", prodRouter)
apiRouter.use("/users", userRoute)
// apiRouter.use("/carts", )

export default apiRouter