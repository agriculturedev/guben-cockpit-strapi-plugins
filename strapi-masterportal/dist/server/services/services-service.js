"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async getServices() {
        const data = await strapi.entityService.findOne('api::service.service', 1, {});
        return data.services;
    },
});
