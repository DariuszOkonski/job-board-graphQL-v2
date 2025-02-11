export const resolvers = {
  Query: {
    jobs: () => {
      return [
        {
          id: '111',
          title: 'The title 1',
          description: 'descriptions 1',
        },
        {
          id: '222',
          title: 'The title 2',
          description: 'descriptions 2',
        },
      ];
    },
  },
};
