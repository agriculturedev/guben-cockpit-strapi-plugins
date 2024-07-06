"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    index(ctx) {
        ctx.body = strapi
            .plugin('remote-gateway')
            .service('myService')
            .getWelcomeMessage();
    },
});
