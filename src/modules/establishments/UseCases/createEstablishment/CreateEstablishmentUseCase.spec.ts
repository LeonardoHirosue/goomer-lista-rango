import { EstablishmentRepositoryInMemory } from "../../repositories/in-memory/EstablishmentsRepositoryInMemory";
import { CreateEstablishmentUseCase } from "./CreateEstablishmentUseCase";

let createEstablishmentUseCase: CreateEstablishmentUseCase;
let establishmentsRepositoryInMemory: EstablishmentRepositoryInMemory;

describe("Create establishment", () => {
  beforeEach(() => {
    establishmentsRepositoryInMemory = new EstablishmentRepositoryInMemory();
    createEstablishmentUseCase = new CreateEstablishmentUseCase(
      establishmentsRepositoryInMemory
    );
  });

  it("should be able to create a new establishment.", async () => {
    await createEstablishmentUseCase.execute({
      image: "imagem",
      name: "Restaurante",
      address: {
        country: "Brasil",
        state: "São Paulo",
        city: "Sorocaba",
        district: "Jardim America",
        street: "Rua Martinica",
        number: "460",
        postalCode: "18046-805",
        complement: "Residência Comercial",
        reference: "Escritório da Goomer",
      },
      availabilities: [
        {
          dayOfWeek: [
            "Segunda-feira",
            "Terça-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
          ],
          startTime: "09:00",
          endTime: "12:00",
        },
        {
          dayOfWeek: [
            "Segunda-feira",
            "Terça-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
          ],
          startTime: "13:00",
          endTime: "18:00",
        },
      ],
    });
  });
});
