import { Request, Response } from "express";

import { UpdateEstablishmentUseCase } from "./UpdateEstablishmentUseCase";

class UpdateEstablishmentsController {
    constructor(private updateEstablishmentUseCase: UpdateEstablishmentUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
        const { name, image, address, availabilities } = request.body;

        await this.updateEstablishmentUseCase.execute({id, name, image, address, availabilities});

        return response.status(201).send();
    }
}

export { UpdateEstablishmentsController }