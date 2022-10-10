import { IEstablishmentsRepository } from "modules/establishments/repositories/IEstablishmentsRepository";

class DeleteEstablishmentUseCase{
    
    constructor(private establishmentsRepository: IEstablishmentsRepository){}

    async execute(id: string): Promise<void> {
        
        await this.establishmentsRepository.deleteEstabishment(id)
    }
}

export { DeleteEstablishmentUseCase }

