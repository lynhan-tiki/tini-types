module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    plugins: [
        '@typescript-eslint',
    ],
    ignorePatterns: ['*.js', "node_modules"],
    rules: {
        indent: ['error', 4],
        'no-trailing-spaces': ['error'],
        semi: ['off'],
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/no-extra-semi': ['error'],
        quotes: ['off'],
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/ban-ts-comment': ['off'],
        '@typescript-eslint/adjacent-overload-signatures': ['error'],
        '@typescript-eslint/ban-types': ['error', {
            extendDefaults: true,
            types: {
                /**
                 * we are using `{}` as noop
                 * e.g. `type A<P> = B & (P extends Q ? C : {})`
                 * will get `B & C` when `P extends Q` and `B` otherwise
                 */
                '{}': false,
                /**
                 * we actually need a type accepting any function-like value
                 * e.g. `type Methods = Record<string, Function>`
                 */
                'Function': false,
            }
        }],
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'none',
                requireLast: false,
            },
            singleline: {
                delimiter: 'comma',
                requireLast: false
            }
        }],
        '@typescript-eslint/naming-convention': ['error', {
            selector: 'enum',
            format: ['UPPER_CASE'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
        }, {
            selector: 'typeLike',
            format: ['PascalCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
        }],
        '@typescript-eslint/array-type': ['error', {
            default: 'array-simple',
            readonly: 'array-simple'
        }],
        '@typescript-eslint/no-unnecessary-qualifier': ['error'],
    },
}