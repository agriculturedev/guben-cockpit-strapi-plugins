"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async getEvents() {
        const data = await strapi.entityService.findMany('api::event.event');
        return {
            "type": "FeatureCollection",
            features: data.map((event, index) => ({
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    // @ts-ignore
                    "coordinates": [event.coords.lng, event.coords.lat]
                },
                "properties": event
            }))
        };
    },
});
