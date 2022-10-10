import { NotFoundError } from "helpers/ApiErrors";
import { IEstablishmentsRepository } from "modules/establishments/repositories/IEstablishmentsRepository";
import { IUpdateEstablishmentDTO } from "../../dtos/UpdateEstablishmentDTO/IUpdateEstablishmentDTO"

class UpdateEstablishmentUseCase {
    constructor(private establishmentsRepository: IEstablishmentsRepository){}

    async execute({id, name, image, address, availabilities}: IUpdateEstablishmentDTO): Promise<void>{
        const establishmentExists = await this.establishmentsRepository.findById(id);

        if (!establishmentExists){
            throw new NotFoundError("Establishment not founded.");
        }

        const establishment = await this.establishmentsRepository.updateEstablishment({id, name, image, address, availabilities});
        
        return establishment;
    }
}

export { UpdateEstablishmentUseCase }