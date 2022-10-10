import { Router } from "express";

import { establishmentRoustes } from "./establishment.routes";

const router = Router();

router.use("/establishment", establishmentRoustes);

export { router }
