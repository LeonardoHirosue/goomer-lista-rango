import { EstablishmentsRepository } from "modules/establishments/repositories/postgresql/EstablishmentsRepository";
import { DeleteEstablishmentController } from "./DeleteEstablishmentController";
import { DeleteEstablishmentUseCase } from "./DeleteEstablishmentUseCase";


const establishmentsRepository = new EstablishmentsRepository();

const deleteEstablishmentUseCase = new DeleteEstablishmentUseCase(establishmentsRepository);

const deleteEstablishmentController = new DeleteEstablishmentController(deleteEstablishmentUseCase);

export { deleteEstablishmentController }