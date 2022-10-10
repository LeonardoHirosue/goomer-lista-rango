import { EstablishmentsRepository } from "../../repositories/postgresql/EstablishmentsRepository";
import { UpdateEstablishmentUseCase } from "./UpdateEstablishmentUseCase";
import { UpdateEstablishmentsController } from "./UpdateEstablishmentController";

const establishmentRepository = new EstablishmentsRepository();

const updateEstablishmentUseCase = new UpdateEstablishmentUseCase(establishmentRepository);

const updateEstablishmentController = new UpdateEstablishmentsController(updateEstablishmentUseCase);

export { updateEstablishmentController }
