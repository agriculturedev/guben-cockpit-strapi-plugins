import {BrandenburgEvents, RawEvent} from "./types/events";
import {Event} from "./classes/Event";
const { XMLParser } = require("fast-xml-parser");


export class Importer {
  _strapi: any;
  _startTime = null;
  _endTime = null;
  _parser = new XMLParser();

  constructor(strapi) {
    console.log("Starting importer...");
    this._startTime = new Date();
    this._strapi = strapi;
    this.run();
  }

  get strapi() {
    return this._strapi;
  }

  async run() {
    const response = await fetch("https://eingabe.events-in-brandenburg.de/exportdata/tmbevents_custom_stadtguben.xml");
    const data = await response.text();
    const xml = this._parser.parse(data).brandenburgevents as BrandenburgEvents;
    console.log(`Importing ${xml.count} events...`);

    for (const event of xml.EVENT) {
      await this.saveEvent(event);
    }
    this._endTime = new Date();
    console.log(`Import finished in ${this._endTime - this._startTime}ms`);
  }

  async saveEvent(data: RawEvent) {
    const event = new Event(data);
    const eventExists = await this.strapi.db.query('api::event.event').findOne({
      where: {
        E_ID: event.id,
        eventId: event.eventId,
        terminId: event.meetingId
      }
    });

    if (!eventExists) {
      try {
        await this.strapi.entityService.create('api::event.event', {
          data: {
            E_ID: event.id,
            eventId: event.eventId,
            terminId: event.meetingId,
            title: event.title.DE,
            description: event.description.DE,
            coords: {
              lat: event.coords.lat,
              lng: event.coords.lng
            },
            startDate: event.von,
            endDate: event.bis
          }
        });
      } catch (e) {
        console.error(e);
      }

    } else {
      try {
        await this.strapi.entityService.update('api::event.event', eventExists.id, {
          data: {
            title: event.title.DE,
            description: event.description.DE,
            coords: {
              lat: event.coords.lat,
              lng: event.coords.lng
            },
            startDate: event.von,
            endDate: event.bis
          }
        });
      } catch (e) {
        console.error(e);
      }
    }
  }
}
