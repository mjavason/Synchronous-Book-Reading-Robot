// Swagger options
export const SWAGGER_OPTIONS = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'File Reading API',
      version: '1.0.0',
      description:
        'Sequentially read text files in this API. Queue new submissions during processing. Email notifications on task completion.',
      contact: {
        name: 'Orji Michael',
        email: 'orjimichael4886@gmail.com',
      },
    },
    servers: [
      { url: 'http://localhost:5000/api/v1', description: 'Development' },
      // { url: 'https://library-file-api.onrender.com/api/v1', description: 'Staging' },
      // { url: 'https://api.fileexample.com/api/v1', description: 'Production' },
    ],
    // tags: [
    //   { name: 'File Reading', description: 'Operations related to reading text files sequentially.' },
    //   { name: 'Queue Management', description: 'Operations related to queuing new file submissions during processing.' },
    //   { name: 'Email Notifications', description: 'Operations related to email notifications on task completion.' },
    // ],
  },
  apis: ['**/*.jsdoc.ts'], // Define paths to your API routes
};
