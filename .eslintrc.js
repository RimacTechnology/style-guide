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
                './eslint/react.js',
                './eslint/next.js',
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
