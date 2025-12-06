import tape from 'tape'

import base58 from '../src/esm/index.js'

import fixtures from './fixtures.json' with { type: 'json' }

interface Fixture {
    hex: string
    string: string
}

interface InvalidFixture {
    description: string
    string: string
}

interface Fixtures {
    valid: Fixture[]
    invalid: InvalidFixture[]
}

const { encode, decode } = base58
const { valid, invalid } = fixtures as Fixtures

tape('base58', (t) => {
    tape('encode', (t) => {
        valid.forEach((f) => {
            tape('can encode ' + f.hex, (t) => {
                const actual = encode(Buffer.from(f.hex, 'hex'))
                t.equal(actual, f.string)
                t.end()
            })
        })

        t.end()
    })

    tape('decode', (t) => {
        valid.forEach((f) => {
            tape('can decode ' + f.string, (t) => {
                const actual = Buffer.from(decode(f.string)).toString('hex')
                t.same(actual, f.hex)
                t.end()
            })
        })

        invalid.forEach((f) => {
            tape('throws on ' + f.description, (t) => {
                t.throws(() => {
                    decode(f.string)
                }, /^Error: Non-base58 character$/)
                t.end()
            })
        })

        t.end()
    })

    t.end()
})
