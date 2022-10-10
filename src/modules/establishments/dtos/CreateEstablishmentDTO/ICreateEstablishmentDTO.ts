import { ICreateAddressDTO } from "./ICreateAddressDTO";
import { ICreateAvailabilityDTO } from "./ICreateAvailabilityDTO";

interface ICreateEstablishmentDTO {
    name: string;
    image: string;
    address: ICreateAddressDTO;
    availabilities: ICreateAvailabilityDTO[];
}

export { ICreateEstablishmentDTO }