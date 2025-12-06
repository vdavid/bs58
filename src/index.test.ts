import tape from 'tape'

import base58, { encode, decode } from './index.ts'

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

const { valid, invalid } = fixtures as Fixtures

tape('base58', (t) => {
    tape('named exports', (t) => {
        t.ok(typeof encode === 'function', 'encode is exported as a function')
        t.ok(typeof decode === 'function', 'decode is exported as a function')
        t.end()
    })

    tape('default export', (t) => {
        t.ok(base58, 'default export exists')
        t.ok(typeof base58.encode === 'function', 'default export has encode method')
        t.ok(typeof base58.decode === 'function', 'default export has decode method')
        t.end()
    })

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
