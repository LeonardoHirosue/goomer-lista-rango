interface ICreateAddressDTO {
    country: string;
    state: string;
    city: string;
    district: string;
    street: string;
    number: string;
    postal_code: string;
    complement: string;
    reference: string;
    establishment_id: string;
}

export { ICreateAddressDTO }