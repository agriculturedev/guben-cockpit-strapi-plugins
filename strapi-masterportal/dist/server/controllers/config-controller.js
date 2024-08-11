"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async index(ctx) {
        ctx.body = await strapi
            .plugin('strapi-masterportal')
            .service('configService')
            .getConfig();
    },
});
