const constants = require('../shared/constants')

/** @type { import('@types/prettier').Config } */
const config = {
    endOfLine: 'lf',
    plugins: ['prettier-plugin-packagejson', 'prettier-plugin-prisma'],
    printWidth: constants.MAX_WIDTH,
    proseWrap: 'always',
    semi: false,
    singleQuote: true,
    tabWidth: constants.INDENT_AMOUNT,
    useTabs: false,
}

module.exports = config
