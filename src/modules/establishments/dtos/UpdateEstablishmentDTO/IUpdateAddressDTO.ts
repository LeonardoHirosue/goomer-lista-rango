interface IUpdateAddressDTO {
    id: string; 
    country: string;
    state: string;
    city: string;
    district: string;
    street: string;
    number: string;
    postal_code: string;
    complement: string;
    reference: string;
}

export { IUpdateAddressDTO }