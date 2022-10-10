import { Request, Response } from "express";

import { DeleteEstablishmentUseCase } from "./DeleteEstablishmentUseCase";

class DeleteEstablishmentController {

    constructor(private deleteEstablishmentUseCase: DeleteEstablishmentUseCase){}

     async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        await this.deleteEstablishmentUseCase.execute(id)

        return response.status(204).send();
    }
}

export { DeleteEstablishmentController }