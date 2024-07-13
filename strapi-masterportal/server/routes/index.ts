export default [
  {
    method: 'GET',
    path: '/events',
    handler: 'eventController.index',
    config: {
      policies: [],
      auth: false,
    },
  },
];
