"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_controller_1 = __importDefault(require("./event-controller"));
const config_controller_1 = __importDefault(require("./config-controller"));
const services_controller_1 = __importDefault(require("./services-controller"));
exports.default = {
    eventController: event_controller_1.default,
    configController: config_controller_1.default,
    servicesController: services_controller_1.default
};
