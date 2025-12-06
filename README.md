# @vdavid/bs58

[![build status](https://github.com/vdavid/bs58/workflows/Run%20Tests/badge.svg)](https://github.com/vdavid/bs58/actions)

TypeScript/JavaScript component to compute base 58 encoding. This encoding is typically used for cryptocurrencies such
as Bitcoin.

**Note:** If you're looking for **base 58 check** encoding, see:
[https://github.com/bitcoinjs/bs58check](https://github.com/bitcoinjs/bs58check), which depends upon the parent of this
library.

## Install

```bash
pnpm add @vdavid/bs58
# or
npm install @vdavid/bs58
```

## Requirements

- Node.js >= 25.0.0
- ESM support (this package is ESM-only)

## API

### Default export

You can import the default export and use it as an object:

```js
import bs58 from '@vdavid/bs58'

const bytes = Uint8Array.from([
    0, 60, 23, 110, 101, 155, 234, 15, 41, 163, 233, 191, 120, 128, 193, 18, 177, 179, 27, 77, 200, 38, 38, 129, 135,
])
const address = bs58.encode(bytes)
console.log(address)
// => 16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS

const decoded = bs58.decode(address)
console.log(Buffer.from(decoded).toString('hex'))
// => 003c176e659bea0f29a3e9bf7880c112b1b31b4dc826268187
```

### Named exports

You can also import `encode` and `decode` as named exports:

```js
import { encode, decode } from '@vdavid/bs58'

const bytes = Uint8Array.from([0, 60, 23, 110, 101, 155, 234])
const address = encode(bytes)
console.log(address)
// => 16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS

const decoded = decode(address)
console.log(Buffer.from(decoded).toString('hex'))
// => 003c176e659bea0f29a3e9bf7880c112b1b31b4dc826268187
```

### encode(input)

Encodes a `Uint8Array`, `Buffer`, or `Array` to a base58 string.

**Parameters:**

- `input` - The binary data to encode

**Returns:** A base58 encoded string

**Example:**

```js
import { encode } from '@vdavid/bs58'

const bytes = Buffer.from('hello world', 'utf8')
const encoded = encode(bytes)
console.log(encoded)
```

### decode(input)

Decodes a base58 string to a `Uint8Array`.

**Parameters:**

- `input` - The base58 encoded string to decode

**Returns:** A `Uint8Array` containing the decoded binary data

**Throws:** `Error` if the input contains invalid base58 characters

**Example:**

```js
import { decode } from '@vdavid/bs58'

const address = '16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS'
const bytes = decode(address)
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
- `pnpm run typecheck` - Run TypeScript type checking

## Browser

This package is ESM-only. For browser usage, use a bundler like Vite, Webpack, or Rollup that supports ESM.

## Credits

- [David Veszelovszki](https://github.com/vdavid) for maintaining this package
- [Jonathan Underwood](https://github.com/junderw) for writing the parent JS implementation
- [Mike Hearn](https://github.com/mikehearn) for original Java implementation
- [Stefan Thomas](https://github.com/justmoon) for porting to JavaScript
- [Stephan Pair](https://github.com/gasteve) for buffer improvements
- [Daniel Cousens](https://github.com/dcousens) for cleanup and merging improvements from bitcoinjs-lib
- [Jared Deckard](https://github.com/deckar01) for killing `bigi` as a dependency
