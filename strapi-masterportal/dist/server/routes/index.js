"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        method: 'GET',
        path: '/events',
        handler: 'eventController.index',
        config: {
            policies: [],
            auth: false,
        },
    },
];
