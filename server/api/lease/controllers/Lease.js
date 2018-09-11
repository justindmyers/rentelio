'use strict';

/**
 * Lease.js controller
 *
 * @description: A set of functions called "actions" for managing `Lease`.
 */

module.exports = {

  /**
   * Retrieve lease records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.lease.search(ctx.query);
    } else {
      return strapi.services.lease.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a lease record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.lease.fetch(ctx.params);
  },

  /**
   * Count lease records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.lease.count(ctx.query);
  },

  /**
   * Create a/an lease record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.lease.add(ctx.request.body);
  },

  /**
   * Update a/an lease record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.lease.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an lease record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.lease.remove(ctx.params);
  }
};
