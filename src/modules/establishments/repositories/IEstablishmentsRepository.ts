import { ICreateEstablishmentDTO } from "../dtos/CreateEstablishmentDTO/ICreateEstablishmentDTO";
import { IListEstablishmentDataDTO } from "../dtos/ListEstablishmentDataDTO/IListEstablishmentDataDTO";
import { IUpdateEstablishmentDTO } from "../dtos/UpdateEstablishmentDTO/IUpdateEstablishmentDTO";

interface IEstablishmentsRepository {
    createEstablishment(data: ICreateEstablishmentDTO): Promise<void>;
    listEstablishments(): Promise<IListEstablishmentDataDTO[]>;
    listEstablishmentData(id: string): Promise<IListEstablishmentDataDTO>;
    deleteEstabishment(id: string): Promise<void>;
    findById(id: string): Promise<IListEstablishmentDataDTO>;
    updateEstablishment(data: IUpdateEstablishmentDTO): Promise<void>;
}

export { IEstablishmentsRepository }