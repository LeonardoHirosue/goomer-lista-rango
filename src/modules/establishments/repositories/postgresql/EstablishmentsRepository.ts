import db from "database/index";
import { QueryConfig } from "pg";
import { v4 as uuidV4 } from "uuid";

import { IEstablishmentsRepository } from "../IEstablishmentsRepository";
import { ICreateEstablishmentDTO } from "../../dtos/CreateEstablishmentDTO/ICreateEstablishmentDTO";
import { IListAddressDataDTO } from "modules/establishments/dtos/ListEstablishmentDataDTO/IListAddressDataDTO";
import { IListAvailabilityDataDTO } from "modules/establishments/dtos/ListEstablishmentDataDTO/IListAvailabilityDataDTO";
import { IListEstablishmentDataDTO } from "modules/establishments/dtos/ListEstablishmentDataDTO/IListEstablishmentDataDTO";
import { ICreateAddressDTO } from "modules/establishments/dtos/CreateEstablishmentDTO/ICreateAddressDTO";
import { ICreateAvailabilityDTO } from "modules/establishments/dtos/CreateEstablishmentDTO/ICreateAvailabilityDTO";
import { IUpdateEstablishmentDTO } from "modules/establishments/dtos/UpdateEstablishmentDTO/IUpdateEstablishmentDTO";
import { IUpdateAddressDTO } from "modules/establishments/dtos/UpdateEstablishmentDTO/IUpdateAddressDTO";
import { IUpdateAvailabilityDTO } from "modules/establishments/dtos/UpdateEstablishmentDTO/IUpdateAvailabilityDTO";

class EstablishmentsRepository implements IEstablishmentsRepository{

    async findById(id: string): Promise<IListEstablishmentDataDTO> {
        const findEstablishmentById: QueryConfig = {
            name:'Find establishment by id',
            text:'SELECT * FROM tb_establishments WHERE id = $1',
            values: [id]
        }

        const { rows }: { rows: IListEstablishmentDataDTO[] } = await db.query(findEstablishmentById);

        return rows[0];
    }

    async createEstablishment({ name, image, address, availabilities }: ICreateEstablishmentDTO): Promise<void> {        

        const establishment_id = uuidV4();

        const createEstablishmentQuery: QueryConfig = {
            name: 'Create Establishment',
            text: 'INSERT INTO tb_establishments VALUES($1,$2,$3)',
            values: [
                establishment_id, 
                image, 
                name
            ]
        }

        await db.query(createEstablishmentQuery);

        await this.createAddress(establishment_id, address);

        await this.createAvailability(establishment_id, availabilities);
    }

    async createAddress(establishment_id: string, address: ICreateAddressDTO): Promise<void> {        

        const createAddressQuery: QueryConfig = {
            name: 'Create Address',
            text: 'INSERT INTO tb_adresses VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
            values: [
                uuidV4(),
                address.country,
                address.state,
                address.city,
                address.district,
                address.street,
                address.number,
                address.postal_code,
                address.complement,
                address.reference, 
                establishment_id
            ]
        }

        await db.query(createAddressQuery);
    }

    async createAvailability(establishment_id: string, availabilities: ICreateAvailabilityDTO[]): Promise<void> {
                
        availabilities.forEach(async (availability) => {
            let createAvailabilityQuery: QueryConfig = {
            name: 'Create Availability',
            text: 'INSERT INTO tb_availabilities VALUES($1,$2,$3,$4,$5)',
            values: [
                uuidV4(),
                availability.day_of_week,
                availability.start_time,
                availability.end_time,
                establishment_id
            ]}
            await db.query(createAvailabilityQuery);
        });
    }

    async listEstablishments(): Promise<IListEstablishmentDataDTO[]> {
        const listEstablishmentsQuery: QueryConfig = {
            name:'List Establishments',
            text:'SELECT name, id FROM tb_establishments'
        }

        const { rows }: { rows: IListEstablishmentDataDTO[] } = await db.query(listEstablishmentsQuery);
        
        return rows;
    }

    async listEstablishmentData(id: string): Promise<IListEstablishmentDataDTO> {

        const listEstablishmentDataQuery: QueryConfig = {
            name: 'List Establishment Data',
            text: `SELECT * FROM tb_establishments WHERE id = $1`,
            values: [id]
        }

        const { rows } = await db.query(listEstablishmentDataQuery);

        const row = rows[0];

        const address: IListAddressDataDTO = await this.listAddressData(id);

        const availabilities: IListAvailabilityDataDTO[] = await this.listAvailabilityData(id)
        
        const establishment: IListEstablishmentDataDTO = {
            id: row.id,
            image: row.image,
            name: row. name,
            address,
            availabilities
        }
        
        return establishment;
    }

    async listAddressData(id: string): Promise<IListAddressDataDTO> {

        const listAddressDataQuery: QueryConfig = {
            name: 'List Address Data',
            text: `SELECT * FROM tb_adresses WHERE establishment_id = $1`,
            values: [id]
        }

        const { rows } = await db.query(listAddressDataQuery);
        const row = rows[0];
        
        const address: IListAddressDataDTO = { 
            id: row.id,
            country: row.countr,        
            state: row.state,        
            city: row. city,        
            district: row.district,        
            street: row. street,        
            number: row.number,        
            postal_code: row.postal_code,        
            complement: row.complement,        
            reference: row.reference
        }
        
        return address;
    }

    async listAvailabilityData(id: string): Promise<IListAvailabilityDataDTO[]> {

        const listAvailabilitiesDataQuery: QueryConfig = {
            name: 'List Availabilities Data',
            text: `SELECT * FROM tb_availabilities WHERE establishment_id = $1`,
            values: [id]
        }

        const { rows } = await db.query(listAvailabilitiesDataQuery);        

        const availabilities: IListAvailabilityDataDTO[] = [];

        rows.forEach(async (row) => availabilities.push(row))
        
        return availabilities;
    }

    async deleteEstabishment(id: string): Promise<void> {

        const deleteEstabishment: QueryConfig = {
            name: 'Delete Establishment',
            text: 'DELETE FROM tb_establishments WHERE id = $1',
            values: [id]
        }

        await db.query(deleteEstabishment);
    }
    
    async updateEstablishment({id, name, image, address, availabilities }: IUpdateEstablishmentDTO): Promise<void> {

        const updateEstablishmentQuery: QueryConfig = {
            name: 'Update Establishment',
            text: `UPDATE tb_establishments SET name = $2, image = $3 WHERE id = $1;`,
            values: [id, name, image]
        }

        await db.query(updateEstablishmentQuery)

        await this.updateAddress(address);

        await this.updateAvailability(availabilities)

    }

    async updateAddress(address: IUpdateAddressDTO): Promise<void> {

        const updateAddressQuery: QueryConfig = {
            name: 'Update Address',
            text: `UPDATE tb_adresses SET 
                    country = $2, 
                    state = $3,
                    city = $4, 
                    district = $5,
                    street = $6,
                    number = $7, 
                    postal_code = $8, 
                    complement = $9, 
                    reference = $10  
                    WHERE id = $1;`,
            values: [ address.id, 
                      address.country,
                      address.state,
                      address.city,
                      address.district,
                      address.street,
                      address.number,
                      address.postal_code,
                      address.complement,
                      address.reference
                    ]}

        await db.query(updateAddressQuery);
    }

    async updateAvailability(availabilities: IUpdateAvailabilityDTO[]): Promise<void> {

        availabilities.forEach(async (availability) => {
            let updateAvailabilityQuery: QueryConfig = {
                name: 'Update Availability',
                text: `UPDATE tb_availabilities SET 
                        day_of_week = $2, 
                        start_time = $3,
                        end_time = $4 
                        WHERE id = $1;`,
                values: [  
                            availability.id, 
                            availability.day_of_week,
                            availability.start_time,
                            availability.end_time,
                        ]
            }

            await db.query(updateAvailabilityQuery)
        });        

    }
}

export { EstablishmentsRepository }