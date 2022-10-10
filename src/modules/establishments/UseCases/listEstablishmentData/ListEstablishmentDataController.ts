import { Request, Response } from "express";
import { ListEstablishmentsDataUseCase } from "./ListEstablishmentDataUseCase";

class ListEstablishmentsDataController {
    
    constructor(private listEstablishmentDataUseCase: ListEstablishmentsDataUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;

        const establishment =  await this.listEstablishmentDataUseCase.execute(id);     
        
        return response.json(establishment);  
    }
}

export { ListEstablishmentsDataController }