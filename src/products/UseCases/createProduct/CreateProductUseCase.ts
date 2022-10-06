interface IRequest {
  image: string;
  name: string;
  original_value: number;
  category: string;
  offer: {
    offer_active: boolean;
    offer_value?: string;
    offer_description?: string;
    availability: [
      {
        dayOfWeek: string[];
        timePeriods: {
          startTime: Date;
          endTime: Date;
        };
      }
    ];
  };
}
