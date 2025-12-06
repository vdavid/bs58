import basex from 'base-x'

/**
 * Base58 alphabet used for encoding and decoding.
 * This alphabet excludes characters that could be confused: 0 (zero), O (capital o), I (capital i), and l (lowercase L).
 */
const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

/**
 * Base58 encoder/decoder instance.
 * Provides encode and decode functions for converting between binary data and base58 strings.
 */
const bs58 = basex(ALPHABET)

/**
 * Encodes a Uint8Array, Buffer, or Array to a base58 string.
 *
 * @param input - The binary data to encode
 * @returns The base58 encoded string
 */
export const encode: typeof bs58.encode = (input) => bs58.encode(input)

/**
 * Decodes a base58 string to a Uint8Array.
 *
 * @param input - The base58 encoded string to decode
 * @returns The decoded binary data as a Uint8Array
 * @throws {Error} If the input contains invalid base58 characters
 */
export const decode: typeof bs58.decode = (input) => bs58.decode(input)

export default bs58
