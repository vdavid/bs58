import js from '@eslint/js'

import globals from 'globals'

import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'

export default [
    {
        ignores: [
            'dist',
            'build/',
            'node_modules/',
            'coverage/',
            'test/e2e-load/',
            'scripts/',
            'config/',
            '*.config.js',
            'src/',
        ],
    },
    js.configs.recommended,
    prettierConfig,
    ...tseslint.configs.strictTypeChecked.map((config) => ({
        ...config,
        files: ['**/*.{ts,tsx}'],
    })),
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            import: importPlugin,
            prettier,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.es2021,
            },
            parserOptions: {
                project: ['./tsconfig.base.json', './tsconfig.test.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            'prettier/prettier': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/no-unsafe-return': 'error',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            'no-console': 'warn',
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            complexity: [
                'warn',
                {
                    max: 15,
                },
            ],
        },
    },
    {
        files: ['**/*.{js,jsx}'],
        plugins: {
            import: importPlugin,
            prettier,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.es2021,
            },
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx'],
                },
            },
        },
        rules: {
            'prettier/prettier': 'error',
            'no-console': 'warn',
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            complexity: [
                'warn',
                {
                    max: 15,
                },
            ],
        },
    },
    {
        files: ['test/**/*.ts'],
        rules: {
            '@typescript-eslint/unbound-method': 'off',
        },
    },
    {
        files: ['scripts/**/*.mjs'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            'no-console': 'off',
        },
    },
]
