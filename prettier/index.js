/** @type { import('@types/prettier').Config } */
const config = {
    endOfLine: 'lf',
    plugins: ['prettier-plugin-packagejson', 'prettier-plugin-prisma'],
    printWidth: 130,
    proseWrap: 'always',
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
}

module.exports = config
