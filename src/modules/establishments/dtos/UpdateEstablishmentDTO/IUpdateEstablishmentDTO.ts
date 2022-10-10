import { IUploadAddressDTO } from "./IUpdateAddressDTO";
import { IUploadAvailabilityDTO } from "./IUpdateAvailabilityDTO";

interface IUpdateEstablishmentDTO {
    id: string,
    name: string;
    image: string;
    address: IUploadAddressDTO;
    availabilities: IUploadAvailabilityDTO[];
}

export { IUpdateEstablishmentDTO }