# Style Guide

This repository encapsulates all the different configurations we use at Rimac Technology when developing with JS

## Prettier

1. Create a new file at the root of your project called `.prettierrc.js` with the following

```javascript
module.exports = {
    ...require('@rimac-technology/style-guide/prettier'),
}
```

2. Install `prettier` as a dev dependency

3. Create a `.prettierignore` file with the following
    - Do a test run and see what prettier matches and add files you don't want to check in it since prettier still doesn't support
      having `.gitignore` and `.prettierignore` [working together](https://github.com/prettier/prettier/issues/8048)

```
CHANGELOG.md # If your project contains it
```

4. Add a script to your `package.json` with
   `prettier --loglevel warn --no-editorconfig --no-error-on-unmatched-pattern --check \"./**/*{yaml,yml,json,md,gql,graphql,prisma}\" `
    - Adjust the glob to match files you want to check
    - This glob will match all the files recursively in your project

## Package JSON

1. Create a new file at the root of your project called `.packagerc.js` with

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

2. Install `npm-package-json-lint` as a dev dependency

3. Add a script to your `package.json` with `npmPkgJsonLint --configFile ./.packagerc.js .`

## ESLint

1. Create a new file at the root of your project called `.eslintrc.js` with the following
    - Make sure `parserOptions.project` points to the correct `tsconfig.json` location

```javascript
module.exports = {
    extends: [require.resolve('@rimac-technology/style-guide/eslint/core')],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    ignorePatterns: ['**/*.json', '**/*.gql', '**/*.yml'],
}
```

2. Install `eslint`

3. Add a script to your `package.json` with
   `eslint './glob' --quiet --cache --cache-strategy content --cache-location '.eslintcache/'`

    - Adjust the `glob` to match files your want to check
        - For example all ts, js and tsx files: `./**/*.${js,ts,tsx}`

4. You can use any of the optional rulesets
    - `@rimac-technology/style-guide/eslint/react`
    - `@rimac-technology/style-guide/eslint/jest`
    - `@rimac-technology/style-guide/eslint/testing-library`
    - `@rimac-technology/style-guide/eslint/mobx`
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
