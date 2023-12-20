module.exports = {
    overrides: [
        {
            extends: ['./eslint/core.js'],
            files: '*.js',
        },
        {
            extends: [
                './eslint/core.js',
                './eslint/jest.js',
                './eslint/mobx.js',
                './eslint/node.js',
                './eslint/react.js',
                './eslint/next.js',
                './eslint/type-graphql.js',
            ],
            files: '*.ts',
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    settings: {
        next: {
            rootDir: './__tests__',
        },
    },
}
