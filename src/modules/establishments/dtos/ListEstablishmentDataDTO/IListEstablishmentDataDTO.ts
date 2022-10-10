import { IListAddressDataDTO } from "./IListAddressDataDTO";
import { IListAvailabilityDataDTO } from "./IListAvailabilityDataDTO";

interface IListEstablishmentDataDTO{
    id: string;
    image: string;
    name: string;
    address: IListAddressDataDTO;
    availabilities: IListAvailabilityDataDTO[];
}

export { IListEstablishmentDataDTO }