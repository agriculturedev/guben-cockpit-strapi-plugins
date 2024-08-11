"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async getConfig() {
        const data = await strapi.entityService.findOne('api::config.config', 1, {});
        return data.config;
    },
});
