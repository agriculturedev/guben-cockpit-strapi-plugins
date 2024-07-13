"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    getWelcomeMessage() {
        return {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [125.6, 10.1]
            },
            "properties": {
                "name": "Dinagat Islands"
            }
        };
    },
});
