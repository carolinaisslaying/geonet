# GeoNet API Wrapper

[![Compile TypeScript](https://github.com/carolinaisslaying/geonet/actions/workflows/compile.yml/badge.svg)](https://github.com/carolinaisslaying/geonet/actions/workflows/compile.yml)
[![Discord](https://img.shields.io/discord/1325284386643644446?logo=discord&logoColor=white&label=discord&color=5865F2)
](https://discord.gg/VVTJhkKc4G)

A Node.js API wrapper for GeoNet — Aotearoa New Zealand's geological hazard monitoring system.

> **Note**: This wrapper has been independently developed by Carolina Mitchell and is not officially affiliated with GeoNet or GNS Science.

## Installation

```bash
npm install geonet
# or
pnpm add geonet
# or
yarn add geonet
```

## Features

- 🌋 Volcano monitoring and alert levels
- 🌊 Earthquake data and intensity measurements
- 📰 News feed integration
- 📡 Network sensor data access
- 📊 Strong motion data
- 🗺️ GeoJSON format support
- 🧰 Quality of life utilities
- ✨ Full TypeScript support
- 📝 Comprehensive documentation

## Quick Start

### TypeScript
```typescript
import { GeoNet } from "geonet";
import { MMI } from "geonet/dist/@types/common";

const geonet = new GeoNet();

// Get recent earthquakes
const quakes = await geonet.getQuakes(MMI.Light);

// Get volcano alert levels
const alerts = await geonet.getVolcanoAlertLevel();
```

### JavaScript
```javascript
const { GeoNet } = require("geonet");

const geonet = new GeoNet();

// Get recent earthquakes (MMI = 3 for Light intensity)
const quakes = await geonet.getQuakes(3);

// Get volcano alert levels
const alerts = await geonet.getVolcanoAlertLevel();
```

### Error Handling

```typescript
try {
    const quakes = await geonet.getQuakes(MMI.Light);
} catch (error) {
    console.error("Error fetching quakes: ", error.message);
}
```

## Documentation

For detailed documentation, visit our [documentation site](https://geonet.js.org/).

## Contributing

Contributions are welcome! Please read documentation and get familiar with the project code. For details on our code of conduct please *see* our [Code of Conduct](https://github.com/carolinaisslaying/geonet/blob/main/CODE_OF_CONDUCT.md).

If you identify a security vulnerability, please read our [Security Policy](https://github.com/carolinaisslaying/geonet/blob/main/CODE_OF_CONDUCT.md) for information on how to report it, and what versions are supported.

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build the package
pnpm build

# See documentation
pnpm docs

# Generate documentation
pnpm run docs
```

## Licence

This project is licensed under the AGPL-3.0 Licence, *see* the [LICENCE](https://github.com/carolinaisslaying/geonet/blob/main/LICENCE) file for details.

## Related Links

- [GeoNet API Documentation](https://api.geonet.org.nz)
- [GeoNet Website](https://www.geonet.org.nz)
- [GeoNet Data Policy](https://www.geonet.org.nz/policy)

## Support

- [GitHub Issues](https://github.com/carolinaisslaying/geonet/issues)
- [Discord](https://discord.gg/VVTJhkKc4G)
- [Documentation](https://geonet.js.org/)

## Acknowledgments

- [Carolina Mitchell](https://github.com/carolinaisslaying) for creating this package.
- [Khai Dye-Brinkman](https://github.com/khaishea) for contributing to code debugging.
- [GeoNet](https://geonet.org.nz/) for providing the public API.
- [GNS Science](https://www.gns.cri.nz) and [Natural Hazards Commission](https://www.naturalhazards.govt.nz) for operating GeoNet.