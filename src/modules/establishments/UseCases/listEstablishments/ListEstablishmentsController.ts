import { Request, Response } from "express";

import { ListEstablishmentsUseCase } from "./ListEstablishmentsUseCase";

class ListEstablishmentsController {
    constructor(private listEstablishmentsUseCase: ListEstablishmentsUseCase){}
    
    async handle(request: Request, response: Response): Promise<Response> {
        
        const all = await this.listEstablishmentsUseCase.execute()
    
        return response.status(200).json(all);
    }
}

export { ListEstablishmentsController }