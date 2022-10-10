import { ICreateEstablishmentDTO } from "../../dtos/ICreateEstablishmentDTO";
import { Address } from "../postgresql/entities/Address";
import { Establishment } from "../postgresql/entities/Establishment";
import { IEstablishmentsRepository } from "../IEstablishmentsRepository";

class EstablishmentRepositoryInMemory implements IEstablishmentsRepository{
    establishments: Establishment[] = []
    establishmentAdresses: Address[] = [];
    
    async findByName(name: string): Promise<Establishment> {
        const establishment = this.establishments.find((establishment) => {establishment.name === name});
        return establishment;
    }

    async create({ name, image, address, availabilities }: ICreateEstablishmentDTO): Promise<void> {
        const establishment = new Establishment();
        const establishmentAddress = new Address();

        Object.assign(establishment, {
            name,
            image,
        });

        Object.assign(establishmentAddress, {
            country: address.country,
            state: address.state,
            city: address.city,
            district: address.district,
            street: address.street,
            number: address.number,
            postalCode: address.postal_code,
            complement: address.complement,
            reference: address.reference,
        });
        
        this.establishments.push(establishment);
        this.establishmentAdresses.push(establishmentAddress);
    }
}

export { EstablishmentRepositoryInMemory }