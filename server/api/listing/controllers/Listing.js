'use strict';

/**
 * Listing.js controller
 *
 * @description: A set of functions called "actions" for managing `Listing`.
 */

module.exports = {

  /**
   * Retrieve listing records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.listing.search(ctx.query);
    } else {
      return strapi.services.listing.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a listing record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.listing.fetch(ctx.params);
  },

  /**
   * Count listing records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.listing.count(ctx.query);
  },

  /**
   * Create a/an listing record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.listing.add(ctx.request.body);
  },

  /**
   * Update a/an listing record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.listing.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an listing record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.listing.remove(ctx.params);
  }
};
