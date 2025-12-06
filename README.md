# bs58

[![build status](https://github.com/cryptocoinjs/bs58/workflows/Run%20Tests/badge.svg)](https://github.com/cryptocoinjs/bs58/actions)

TypeScript/JavaScript component to compute base 58 encoding. This encoding is typically used for crypto currencies such
as Bitcoin.

**Note:** If you're looking for **base 58 check** encoding, see:
[https://github.com/bitcoinjs/bs58check](https://github.com/bitcoinjs/bs58check), which depends upon this library.

## Install

```bash
pnpm add bs58
# or
npm install bs58
```

## Requirements

- Node.js >= 25.0.0
- ESM support (this package is ESM-only)

## API

### encode(input)

`input` must be a `Uint8Array`, `Buffer`, or an `Array`. It returns a `string`.

**Example:**

```js
import bs58 from 'bs58'

const bytes = Uint8Array.from([
    0, 60, 23, 110, 101, 155, 234, 15, 41, 163, 233, 191, 120, 128, 193, 18, 177, 179, 27, 77, 200, 38, 38, 129, 135,
])
const address = bs58.encode(bytes)
console.log(address)
// => 16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS
```

### decode(input)

`input` must be a base 58 encoded string. Returns a `Uint8Array`.

**Example:**

```js
import bs58 from 'bs58'

const address = '16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS'
const bytes = bs58.decode(address)
// See uint8array-tools package for helpful hex encoding/decoding/compare tools
console.log(Buffer.from(bytes).toString('hex'))
// => 003c176e659bea0f29a3e9bf7880c112b1b31b4dc826268187
```

## Development

This project uses:

- **pnpm** for package management
- **TypeScript** for type safety
- **ESLint** and **Prettier** for code quality
- **tape** for testing

### Setup

```bash
pnpm install
```

### Scripts

- `pnpm run build` - Build the project
- `pnpm run test` - Run linting and tests
- `pnpm run unit` - Run tests only
- `pnpm run lint` - Run ESLint
- `pnpm run lint:fix` - Fix ESLint issues
- `pnpm run format` - Format code with Prettier
- `pnpm run format:check` - Check code formatting

## Browser

This package is ESM-only. For browser usage, use a bundler like Vite, Webpack, or Rollup that supports ESM.

## Credits

- [Mike Hearn](https://github.com/mikehearn) for original Java implementation
- [Stefan Thomas](https://github.com/justmoon) for porting to JavaScript
- [Stephan Pair](https://github.com/gasteve) for buffer improvements
- [Daniel Cousens](https://github.com/dcousens) for cleanup and merging improvements from bitcoinjs-lib
- [Jared Deckard](https://github.com/deckar01) for killing `bigi` as a dependency

## License

MIT
