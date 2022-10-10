import { Request, Response } from "express";

import { CreateEstablishmentUseCase } from "./CreateEstablishmentUseCase";

class CreateEstablishmentController {

  constructor(private createEstablishmentUseCase: CreateEstablishmentUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, image, address, availabilities } = request.body;

    await this.createEstablishmentUseCase.execute({ name, image, address, availabilities })

    return response.status(201).send();
  }
}

export { CreateEstablishmentController };
