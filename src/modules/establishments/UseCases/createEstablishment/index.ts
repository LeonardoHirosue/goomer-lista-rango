import { EstablishmentsRepository } from "../../repositories/postgresql/EstablishmentsRepository";
import { CreateEstablishmentController } from "./CreateEstablishmentController";
import { CreateEstablishmentUseCase } from "./CreateEstablishmentUseCase";

const establishmentsRepository = new EstablishmentsRepository();

const createEstablishmentUseCase = new CreateEstablishmentUseCase(establishmentsRepository)

const createEstablishmentController = new CreateEstablishmentController(createEstablishmentUseCase)

export { createEstablishmentController }