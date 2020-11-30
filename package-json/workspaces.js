/** @type { import('npm-package-json-lint/dist/src/configuration').Config } */
const config = {
    extends: '@rimac-technology/style-guide/package-json/core',
    overrides: [
        {
            patterns: [
                '.',
            ],
            rules: {
                'require-author': 'error',
                'require-bugs': 'error',
                'require-engines': 'error',
                'require-repository': 'error',
            },
        },
        {
            patterns: [
                'packages/**/package.json',
            ],
            rules: {
                'require-main': 'error',
            },
        },
    ],
}

module.exports = config
