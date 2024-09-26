/**
 * `populate-global-setting` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  populate: {
    topNavigation: {
      populate: "*"
    }
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In populate-global-setting middleware.');

    ctx.query = {
      ...ctx.query,
      ...populate,
    }

    await next();
  };
};
