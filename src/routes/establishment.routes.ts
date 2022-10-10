import { Router } from "express";

import { createEstablishmentController } from "../modules/establishments/UseCases/createEstablishment";
import { listEstablishmentDataController } from "../modules/establishments/UseCases/listEstablishmentData";
import { listEstablishmentController } from "../modules/establishments/UseCases/listEstablishments";
import { deleteEstablishmentController } from "modules/establishments/UseCases/deleteEstablishment";
import { updateEstablishmentController } from "modules/establishments/UseCases/updateEstablishment";

const establishmentRoustes = Router();

establishmentRoustes.post("/", (request, response) => {
  createEstablishmentController.handle(request, response);
});

establishmentRoustes.get("/", (request, response) => {
  listEstablishmentController.handle(request, response);
});

establishmentRoustes.get("/:id", (request, response) => {
  listEstablishmentDataController.handle(request, response);
});

establishmentRoustes.delete("/:id", (request, response) => {
  deleteEstablishmentController.handle(request, response);
});

establishmentRoustes.put("/:id", (request, response) => {
  updateEstablishmentController.handle(request, response);
});

export { establishmentRoustes };
