import { Importer } from './importer/main';
export default {
  /**
   * Simple example.
   * Every monday at 1am.
   */

  myJob: {
    task: ({ strapi }) => {

      // Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
      new Importer(strapi);
    },
    options: {
      rule: "0 1 * * * *",
    },
  },
};
