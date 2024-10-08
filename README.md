# misp

Node.js client for MISP (Malware Information Sharing Platform) API.

The library is built in TypeScript and is compatible with both CommonJS and ES Modules.

> This is a work in progress project and implements just a few resources for now.

## Installation

```bash
npm install misp
```

## Usage

```javascript
const { Client } = require('misp');

const client = new Client('https://misp.example.com', 'your-api-key');

// Retrieve all events
client.events.list().then((events) => {
    console.log(events);
});
```

## Roadmap

- [ ] Implement all resources
    - [x] Events
    - [x] Tags
    - [x] Attributes
    - [ ] Objects
    - [x] Users
    - [x] Organisations
    - [x] Galaxies
    - [ ] Galaxy clusters
    - [ ] Taxonomies
    - [x] Feeds
    - [x] Servers
    - [x] Workers
    - [x] Analyst Data
    - [x] Auth Keys
    - [x] Logs
    - [ ] Sightings
    - [ ] User settings
    - [ ] Event report
    - [ ] Warninglists
    - [ ] Sharing groups
- [ ] Typed values for parameters and return values
- [ ] Unit tests

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.