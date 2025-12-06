# Roadmap

This document tracks the modernization progress of the bs58 project.

## Completed

- ✅ Baseline tests passing (fixed import assertion syntax)
- ✅ Created roadmap and established infrastructure
- ✅ Switched to pnpm (added packageManager field, preinstall script, converted lockfile)
- ✅ Upgraded to Node 25 (updated engines field, CI workflows, verified compatibility)
- ✅ Updated all dependencies to latest versions
- ✅ Integrated ESLint and Prettier (added scripts, fixed linting issues, simplified config for non-React project)
- ✅ Converted test files to TypeScript (test/index.js → test/index.ts)
- ✅ Completed TypeScript migration (ensured full type coverage in ts_src/index.ts, added JSDoc comments)
- ✅ Removed CJS build (deleted src/cjs/, updated package.json exports, removed tsconfig.cjs.json)
- ✅ Simplified build scripts for ESM-only output (removed postbuild script)
- ✅ Updated CI workflows to use pnpm and Node 25
- ✅ Enhanced documentation (updated README.md with modern examples, added JSDoc comments, updated CHANGELOG)

## Modernization Summary

The project has been successfully modernized with the following changes:

1. **Package Management**: Switched from npm to pnpm with enforced usage
2. **Node.js**: Upgraded to Node 25 (latest)
3. **TypeScript**: Full TypeScript conversion with proper types
4. **Module System**: Removed CJS, now ESM-only
5. **Code Quality**: Added ESLint and Prettier with strict configurations
6. **Dependencies**: All packages updated to latest versions
7. **Documentation**: Enhanced README and CHANGELOG with modern information
8. **CI/CD**: Updated GitHub Actions to use pnpm and Node 25

## Notes

- All tests pass after each modernization step
- ESLint config simplified (removed React-specific rules)
- Prettier config uses 4-space indentation
- Build process simplified for ESM-only output
- TypeScript strict mode enabled
