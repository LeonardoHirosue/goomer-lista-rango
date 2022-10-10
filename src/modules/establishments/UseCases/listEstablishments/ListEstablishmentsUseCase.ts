import { IEstablishmentsRepository } from "../../repositories/IEstablishmentsRepository"
import { IListEstablishmentDataDTO } from "modules/establishments/dtos/ListEstablishmentDataDTO/IListEstablishmentDataDTO";

class ListEstablishmentsUseCase {
    constructor(private establishmentRepository: IEstablishmentsRepository) {}

    async execute(): Promise<IListEstablishmentDataDTO[]> {

        const establishments = this.establishmentRepository.listEstablishments();

        return establishments; 
    }
}

export { ListEstablishmentsUseCase }