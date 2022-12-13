# Style Guide

This repository encapsulates all the different configurations we use at Rimac Technology when developing with JS

**Firstly install the style guide `@rimac-technology/style-guide` and then pick the configurations you need:**

## Prettier

1. Install `prettier` as a dev dependency

2. Create a new file at the root of your project called `.prettierrc.js` with the following

```javascript
module.exports = {
    ...require('@rimac-technology/style-guide/prettier'),
}
```

3. Create a `.prettierignore` file with the following

```
CHANGELOG.md # If your project contains it
```

4. Add a script to your `package.json` with
   `prettier --loglevel warn --no-editorconfig --no-error-on-unmatched-pattern --check \"./**/*{yaml,yml,json,md,gql,graphql,prisma}\" `

    - Adjust the glob to match files you want to check
    - This glob will match all the files recursively in your project

5. Do a test run and see what prettier matches and add files you don't want to check in it since prettier still doesn't support
   having `.gitignore` and `.prettierignore` [working together](https://github.com/prettier/prettier/issues/8048)

## Package JSON

1. Install `npm-package-json-lint` as a dev dependency

2. Create a new file at the root of your project called `.packagerc.js` with

    - If you are using workspaces

    ```javascript
    module.exports = {
        extends: '@rimac-technology/style-guide/package-json/workspaces',
    }
    ```

    - If you are not using workspaces

    ```javascript
    module.exports = {
        extends: '@rimac-technology/style-guide/package-json/core',
    }
    ```

3. Add a script to your `package.json` with `npmPkgJsonLint --configFile ./.packagerc.js .`

## ESLint

1. Install `eslint` as a dev dependency

2. Create a new file at the root of your project called `.eslintrc.js` with the following
    - Make sure `parserOptions.project` points to the correct `tsconfig.json` location

```javascript
module.exports = {
    extends: [require.resolve('@rimac-technology/style-guide/eslint/core')],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    ignorePatterns: ['**/*generated.json'],
}
```

3. Add a script to your `package.json` with
   `eslint './**/*.{js,ts}' --quiet --cache --cache-strategy content --cache-location '.eslintcache/'`

    - Adjust the `glob` to match files your want to check
        - For example all ts, js and tsx files: `./**/*.${js,ts,tsx}`

4. You can use any of the optional rulesets

    - `@rimac-technology/style-guide/eslint/react`
    - `@rimac-technology/style-guide/eslint/jest`
    - `@rimac-technology/style-guide/eslint/testing-library`
    - `@rimac-technology/style-guide/eslint/mobx`
    - `@rimac-technology/style-guide/eslint/next`
        - You need to add a setting to point to your pages directory in `.eslintrc.js` config file like so
        ```javascript
        module.exports = {
            // Other config stuff
            settings: {
                next: {
                    rootDir: './packages/web/',
                },
            },
            // Other config stuff
        }
        ```
    - `@rimac-technology/style-guide/eslint/type-graphql`
    - Example configuration with overrides for only `.test.ts` files with `jest` ruleset

    ```javascript
    module.exports = {
        extends: [require.resolve('@rimac-technology/style-guide/eslint/core')],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            project: './tsconfig.json',
        },
        overrides: [
            {
                files: ['**/*.test.ts'],
                extends: [require.resolve('@rimac-technology/style-guide/eslint/jest')],
            },
        ],
    }
    ```

5. Add eslint cache to `.gitignore` like so

```
.eslintcache
```

## Stylelint

1. Install `stylelint` as a dev dependency

2. Create a new file at the root of your project called `.stylelintrc.js` with the following

```javascript
module.exports = {
    extends: '@rimac-technology/style-guide/stylelint',
}
```

3. Add a script to your `package.json` with `stylelint --cache --allow-empty-input './**/*.css'`

4. Add stylelint cache to `.gitignore` like so

```
.stylelintcache
```

## CSpell

1. Install `cspell` as a dev dependency

2. Create a new file at the root of your project called `.cspell.json` with the following

```json
{
    "useGitignore": true,
    "cache": {
        "useCache": true,
        "cacheStrategy": "content",
        "cacheLocation": "./.cspellcache"
    },
    "ignorePaths": [
        // Add ignored paths/files here
    ],
    "ignoreWords": [
        // Add words here
    ]
}
```

3. Add a script to your `package.json` with `cspell --no-progress --no-summary '**'`

4. Add cspell cache to `.gitignore` like so

```
.cspellcache
```
