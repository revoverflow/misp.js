# misp

Node.js client for MISP (Malware Information Sharing Platform) API.

> This is a work in progress project and implements just a few resources for now.

## Installation

```bash
npm install misp
```

## Usage

```javascript
import { Client } from 'misp';

const client = new Client('https://misp.example.com', 'your-api-key');
```