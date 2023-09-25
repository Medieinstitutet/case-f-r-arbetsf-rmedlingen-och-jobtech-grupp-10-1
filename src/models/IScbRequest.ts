export interface IScbRequest {
  query: [
    {
      code: string;
      selection: {
        filter: string;
        values: string[];
      };
    },
    {
      code: string;
      selection: {
        filter: string;
        values: string[];
      };
    },
    {
      code: string;
      selection: {
        filter: string;
        values: string[];
      };
    }
  ];
  response: {
    format: string;
  };
}
