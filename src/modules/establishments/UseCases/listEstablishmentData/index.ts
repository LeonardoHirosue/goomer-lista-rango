import { EstablishmentsRepository } from "../../repositories/postgresql/EstablishmentsRepository";
import { ListEstablishmentsDataController } from "./ListEstablishmentDataController";
import { ListEstablishmentsDataUseCase } from "./ListEstablishmentDataUseCase";

const establishmentRepository = new EstablishmentsRepository();

const listEstablishmentDataUseCase = new ListEstablishmentsDataUseCase(establishmentRepository);

const listEstablishmentDataController = new ListEstablishmentsDataController(listEstablishmentDataUseCase);

export { listEstablishmentDataController }
