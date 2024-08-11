"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_service_1 = __importDefault(require("./event-service"));
const config_service_1 = __importDefault(require("./config-service"));
const services_service_1 = __importDefault(require("./services-service"));
exports.default = {
    eventService: event_service_1.default,
    configService: config_service_1.default,
    servicesService: services_service_1.default
};
