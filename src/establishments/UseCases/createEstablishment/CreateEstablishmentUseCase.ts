interface IRequest {
  image: string;
  name: string;
  adress: {
    country: string;
    state: string;
    city: string;
    district: string;
    street: string;
    number: string;
    postalCode: string;
    complement: string;
    reference: string;
  };
  availability: [
    {
      dayOfWeek: string[];
      timePeriods: {
        startTime: Date;
        endTime: Date;
      };
    }
  ];
}
