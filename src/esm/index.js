import basex from 'base-x'
/**
 * Base58 alphabet used for encoding and decoding.
 * This alphabet excludes characters that could be confused: 0 (zero), O (capital o), I (capital i), and l (lowercase L).
 */
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
/**
 * Base58 encoder/decoder instance.
 * Provides encode and decode functions for converting between binary data and base58 strings.
 */
var bs58 = basex(ALPHABET)
export default bs58
