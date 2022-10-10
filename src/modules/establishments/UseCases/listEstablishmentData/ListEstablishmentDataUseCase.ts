import { IEstablishmentsRepository } from "../../repositories/IEstablishmentsRepository";
import { IListEstablishmentDataDTO } from "modules/establishments/dtos/ListEstablishmentDataDTO/IListEstablishmentDataDTO";
import { NotFoundError } from "helpers/ApiErrors";

class ListEstablishmentsDataUseCase{

    constructor(private establishmentsRepository: IEstablishmentsRepository){}

    async execute(id: string): Promise<IListEstablishmentDataDTO>{

        const establishmentExists = await this.establishmentsRepository.findById(id);

        if (!establishmentExists){
            throw new NotFoundError("Establishment not founded.");
        }

        const establishment = await this.establishmentsRepository.listEstablishmentData(id);
        
        return establishment;
    }
}

export { ListEstablishmentsDataUseCase }