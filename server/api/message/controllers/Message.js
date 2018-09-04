'use strict';

/**
 * Message.js controller
 *
 * @description: A set of functions called "actions" for managing `Message`.
 */

module.exports = {

  /**
   * Retrieve message records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.message.search(ctx.query);
    } else {
      return strapi.services.message.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a message record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.message.fetch(ctx.params);
  },

  /**
   * Count message records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.message.count(ctx.query);
  },

  /**
   * Create a/an message record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.message.add(ctx.request.body);
  },

  /**
   * Update a/an message record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.message.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an message record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.message.remove(ctx.params);
  }
};
