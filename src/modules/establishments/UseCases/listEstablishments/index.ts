import { EstablishmentsRepository } from "../../repositories/postgresql/EstablishmentsRepository";
import { ListEstablishmentsUseCase } from "./ListEstablishmentsUseCase";
import { ListEstablishmentsController } from "./ListEstablishmentsController";

const establishmentRepository = new EstablishmentsRepository();

const listEstablishmentUseCase = new ListEstablishmentsUseCase(establishmentRepository);

const listEstablishmentController = new ListEstablishmentsController(listEstablishmentUseCase);

export { listEstablishmentController }
