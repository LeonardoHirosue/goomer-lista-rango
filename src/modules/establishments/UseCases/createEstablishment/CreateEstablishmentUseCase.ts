import { ICreateEstablishmentDTO } from "modules/establishments/dtos/CreateEstablishmentDTO/ICreateEstablishmentDTO";
import { IEstablishmentsRepository } from "../../repositories/IEstablishmentsRepository";

class CreateEstablishmentUseCase {

  constructor(private establishmentsRepository: IEstablishmentsRepository){}

  async execute({ image, name, address, availabilities }: ICreateEstablishmentDTO): Promise<void> {

    await this.establishmentsRepository.createEstablishment({
      image,
      name,
      address,
      availabilities,
    });
  }
}

export { CreateEstablishmentUseCase };
