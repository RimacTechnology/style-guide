# [9.3.0-beta.3](https://github.com/RimacTechnology/style-guide/compare/v9.3.0-beta.2...v9.3.0-beta.3) (2024-03-06)

# [9.3.0-beta.2](https://github.com/RimacTechnology/style-guide/compare/v9.3.0-beta.1...v9.3.0-beta.2) (2024-03-05)


### Features

* update `typescript-eslint` dep ([0a4b15f](https://github.com/RimacTechnology/style-guide/commit/0a4b15fe7edc6fe2fbfc53385069836db04003c6))

# [9.3.0-beta.1](https://github.com/RimacTechnology/style-guide/compare/v9.2.1...v9.3.0-beta.1) (2024-03-05)


### Features

* disable husky in actions ([b1c937f](https://github.com/RimacTechnology/style-guide/commit/b1c937fe7916b061b37e57536b6227653355ab54))
* update dependencies ([bfa29d6](https://github.com/RimacTechnology/style-guide/commit/bfa29d6d80630ab5271d4b68549f5402b0cfe783))

## [9.2.1](https://github.com/RimacTechnology/style-guide/compare/v9.2.0...v9.2.1) (2023-12-04)

# [9.2.0](https://github.com/RimacTechnology/style-guide/compare/v9.1.3...v9.2.0) (2023-11-16)


### Features

* update style plugins ([4d276b3](https://github.com/RimacTechnology/style-guide/commit/4d276b3fd7c2147c8aabefd0a08dab698d68b8fb))

## [9.1.3](https://github.com/RimacTechnology/style-guide/compare/v9.1.2...v9.1.3) (2023-10-22)


### Bug Fixes

* proper peer dependencies notation ([ecfb0a2](https://github.com/RimacTechnology/style-guide/commit/ecfb0a238df47582eab4f9ec5ab24128c3b265fb))
* update lock file ([578147a](https://github.com/RimacTechnology/style-guide/commit/578147aa4216f6fb8e61cdaf39016f8dd3da8c76))

## [9.1.2](https://github.com/RimacTechnology/style-guide/compare/v9.1.1...v9.1.2) (2023-10-20)

## [9.1.1](https://github.com/RimacTechnology/style-guide/compare/v9.1.0...v9.1.1) (2023-09-14)

# [9.1.0](https://github.com/RimacTechnology/style-guide/compare/v9.0.0...v9.1.0) (2023-09-02)


### Features

* **eslint:** allow `Props` as a suffix for types ([55a3c89](https://github.com/RimacTechnology/style-guide/commit/55a3c896c93ff41f2fbf78428fdefccabe480a55))

# [9.0.0](https://github.com/RimacTechnology/style-guide/compare/v8.1.0...v9.0.0) (2023-08-24)


### Bug Fixes

* dont autofix eslint errors ([07e8c1f](https://github.com/RimacTechnology/style-guide/commit/07e8c1f0f17606370678f36dff59d3850743d45e))


### Code Refactoring

* change `jsx-first-prop-new-line` default to `multiprop` ([722b41b](https://github.com/RimacTechnology/style-guide/commit/722b41b6470baf91f0421d9eaf62337f9828b08c))


### Features

* add `@eslint-community/eslint-comments/require-description` ([129c836](https://github.com/RimacTechnology/style-guide/commit/129c8365c4615bae4b45d40cce0e6077883ef481))
* add `@typescript-eslint/naming-convention` ([b72b021](https://github.com/RimacTechnology/style-guide/commit/b72b021b41e7befdc5a17cad2cba74c244e1dee5))
* **eslint:** add `quote-props` ([e0397ec](https://github.com/RimacTechnology/style-guide/commit/e0397ec6699108c05a8ec0f2b250f0bc8f412818))


### BREAKING CHANGES

* all eslint disable directives now have to have description/explanation
* components with only one prop need to be inline
* **eslint:** quotes around properties will be removed unless needed
* types have to have `Type` suffix and generics have to have `T` prefix

# [8.1.0](https://github.com/RimacTechnology/style-guide/compare/v8.0.3...v8.1.0) (2023-08-02)


### Features

* **package-json:** remove hardcoded rimac author, add author as required ([9932a61](https://github.com/RimacTechnology/style-guide/commit/9932a61768cf5e03d16deae8bb2bf330c7316712))

## [8.0.3](https://github.com/RimacTechnology/style-guide/compare/v8.0.2...v8.0.3) (2023-07-18)

## [8.0.2](https://github.com/RimacTechnology/style-guide/compare/v8.0.1...v8.0.2) (2023-07-10)

## [8.0.1](https://github.com/RimacTechnology/style-guide/compare/v8.0.0...v8.0.1) (2023-05-25)

# [8.0.0](https://github.com/RimacTechnology/style-guide/compare/v7.0.0...v8.0.0) (2023-05-16)


### Features

* add multiline comment rule ([b9b7f06](https://github.com/RimacTechnology/style-guide/commit/b9b7f0625afe417054f2b2241f0d68b357135a02))


### BREAKING CHANGES

* multiline comments now have to be formatted a specific way

# [7.0.0](https://github.com/RimacTechnology/style-guide/compare/v6.1.1...v7.0.0) (2023-04-03)


### Bug Fixes

* **eslint:** wrong switch case indent ([9730a47](https://github.com/RimacTechnology/style-guide/commit/9730a47890de4d00495cc6e03b54799b88a43458))


### BREAKING CHANGES

* **eslint:** switch cases will not be correctly indented

## [6.1.1](https://github.com/RimacTechnology/style-guide/compare/v6.1.0...v6.1.1) (2023-03-06)

# [6.1.0](https://github.com/RimacTechnology/style-guide/compare/v6.0.0...v6.1.0) (2023-03-01)


### Features

* **stylelint:** add `after-comment` for `at-rule-empty-line-before` ([fbc1ffe](https://github.com/RimacTechnology/style-guide/commit/fbc1ffe26d4cf81ce28d5b85bbd8fff4db1a8975))

# [6.0.0](https://github.com/RimacTechnology/style-guide/compare/v5.0.0...v6.0.0) (2023-02-23)


### Features

* **eslint:** add `array-element-newline` ([d2f96cf](https://github.com/RimacTechnology/style-guide/commit/d2f96cf1b02d56959a0ee9379cb0ed6640ef516d))
* **eslint:** add `function-call-argument-newline` ([d34a91c](https://github.com/RimacTechnology/style-guide/commit/d34a91c95b8264e609e5c2b9b22df61cbc410805))


### BREAKING CHANGES

* **eslint:** function call arguments now have to have consistent line breaks
* **eslint:** array elements now have to have consistent line breaks

# [5.0.0](https://github.com/RimacTechnology/style-guide/compare/v4.0.1...v5.0.0) (2023-02-23)


### Features

* **eslint:** add `function-paren-newline` ([7b9517b](https://github.com/RimacTechnology/style-guide/commit/7b9517b392a9d16fe163d6867630b46c95194946))


### BREAKING CHANGES

* **eslint:** functin brackets now have to have consistent line breaks

## [4.0.1](https://github.com/RimacTechnology/style-guide/compare/v4.0.0...v4.0.1) (2023-02-22)


### Bug Fixes

* **core:** disable `unicorn/no-useless-spread` as there are false positives ([a9083dc](https://github.com/RimacTechnology/style-guide/commit/a9083dc44b2cf269031a35b53f88c185e407e68a))

# [4.0.0](https://github.com/RimacTechnology/style-guide/compare/v3.0.0...v4.0.0) (2023-02-20)


### Features

* **stylelint:** add `declaration-property-value-no-unknown` ([c3cd1d1](https://github.com/RimacTechnology/style-guide/commit/c3cd1d16443b24d248b4ed5146b124b880e8b0ad))


### BREAKING CHANGES

* **stylelint:** css key value properties will now be validated

# [3.0.0](https://github.com/RimacTechnology/style-guide/compare/v2.0.3...v3.0.0) (2023-02-16)


### Code Refactoring

* **eslint:** import sort rule has sightly different algorithm ([0930248](https://github.com/RimacTechnology/style-guide/commit/0930248647ed3ba88467ecde645cf0500167ee21))


### Features

* **eslint:** add `unicorn/no-typeof-undefined` ([7fd9a2e](https://github.com/RimacTechnology/style-guide/commit/7fd9a2e6321797b55947e3498d4465560bde12f0))
* **eslint:** add `unicorn/prefer-set-size` ([3385ce8](https://github.com/RimacTechnology/style-guide/commit/3385ce83bf7437cb454ae809a6b3dbf3fdd0d3b5))


### BREAKING CHANGES

* **eslint:** import sorting is now slightly different
* **eslint:** using `[...new Set(set)]` instead of `new Set(set).size` will now error
* **eslint:** comparing directly to `typeof undefined` will now error

## [2.0.3](https://github.com/RimacTechnology/style-guide/compare/v2.0.2...v2.0.3) (2023-02-07)

## [2.0.2](https://github.com/RimacTechnology/style-guide/compare/v2.0.1...v2.0.2) (2023-02-06)

## [2.0.1](https://github.com/RimacTechnology/style-guide/compare/v2.0.0...v2.0.1) (2023-01-31)

# [2.0.0](https://github.com/RimacTechnology/style-guide/compare/v1.4.5...v2.0.0) (2023-01-31)


### Features

* **stylelint:** add `media-feature-range-notation` ([e3ef623](https://github.com/RimacTechnology/style-guide/commit/e3ef623c1dfc62aa0683a9f3faf70ff24289d3d7))


### BREAKING CHANGES

* **stylelint:** media queries will now need to conform to `media-feature-range-notation`

## [1.4.5](https://github.com/RimacTechnology/style-guide/compare/v1.4.4...v1.4.5) (2022-12-15)


### Bug Fixes

* **stylelint:** ignore `grid-template` for `declaration-block-no-redundant-longhand-properties` ([03128b5](https://github.com/RimacTechnology/style-guide/commit/03128b5cb4ec0cb0e9c42114d840b3eb836cf184))

## [1.4.4](https://github.com/RimacTechnology/style-guide/compare/v1.4.3...v1.4.4) (2022-12-05)


### Bug Fixes

* **stylelint:** ignore `global` for `selector-pseudo-class-no-unknown` ([74173dc](https://github.com/RimacTechnology/style-guide/commit/74173dc2a84625093fcba89f7f7a6727fbf58fdd))

## [1.4.3](https://github.com/RimacTechnology/style-guide/compare/v1.4.2...v1.4.3) (2022-11-25)

## [1.4.2](https://github.com/RimacTechnology/style-guide/compare/v1.4.1...v1.4.2) (2022-11-25)


### Bug Fixes

* **core:** disable broken `@typescript-eslint/keyword-spacing` rule ([b51af49](https://github.com/RimacTechnology/style-guide/commit/b51af49fe41f980e0e8b10a5a6c9ff5a4c7c3b40))

## [1.4.1](https://github.com/RimacTechnology/style-guide/compare/v1.4.0...v1.4.1) (2022-11-24)


### Bug Fixes

* **stylelint:** ignore first nested for `at-rule-empty-line-before` ([8bc20b3](https://github.com/RimacTechnology/style-guide/commit/8bc20b35c8d0e0cdb148333d0197f22967e62eba))

# [1.4.0](https://github.com/RimacTechnology/style-guide/compare/v1.3.1...v1.4.0) (2022-11-24)


### Features

* **next:** add nextjs config ([4db1730](https://github.com/RimacTechnology/style-guide/commit/4db1730863715e7089639d7904b7d6d5ef6b419d))

## [1.3.1](https://github.com/RimacTechnology/style-guide/compare/v1.3.0...v1.3.1) (2022-11-23)

# [1.3.0](https://github.com/RimacTechnology/style-guide/compare/v1.2.4...v1.3.0) (2022-11-23)


### Features

* **stylelint:** add alphabetical properties sort rule ([2117974](https://github.com/RimacTechnology/style-guide/commit/21179742aaf1867cff510fd40e39000ef165bb84))

## [1.2.4](https://github.com/RimacTechnology/style-guide/compare/v1.2.3...v1.2.4) (2022-11-22)


### Bug Fixes

* **package-json:** remove `ts-node` from restricted deps ([c03abe0](https://github.com/RimacTechnology/style-guide/commit/c03abe0059ff106c387b526b6aed7d1953796e5e))

## [1.2.3](https://github.com/RimacTechnology/style-guide/compare/v1.2.2...v1.2.3) (2022-11-22)

## [1.2.2](https://github.com/RimacTechnology/style-guide/compare/v1.2.1...v1.2.2) (2022-11-22)

## [1.2.1](https://github.com/RimacTechnology/style-guide/compare/v1.2.0...v1.2.1) (2022-11-21)


### Bug Fixes

* **react:** ignore words for `react/no-unknown-property` ([d188d30](https://github.com/RimacTechnology/style-guide/commit/d188d30d7c7a97943be48af3b9d03ceb074a3984))

# [1.2.0](https://github.com/RimacTechnology/style-guide/compare/v1.1.5...v1.2.0) (2022-11-21)


### Features

* **core:** add `ignoreClassFieldInitialValues` for magic numbers ([a14903c](https://github.com/RimacTechnology/style-guide/commit/a14903cb8d5c8dfb28ed18b2c71674a22e96ea2d))

## [1.1.5](https://github.com/RimacTechnology/style-guide/compare/v1.1.4...v1.1.5) (2022-11-17)

## [1.1.4](https://github.com/RimacTechnology/style-guide/compare/v1.1.3...v1.1.4) (2022-11-17)

## [1.1.3](https://github.com/RimacTechnology/style-guide/compare/v1.1.2...v1.1.3) (2022-11-17)

## [1.1.2](https://github.com/RimacTechnology/style-guide/compare/v1.1.1...v1.1.2) (2022-11-17)


### Bug Fixes

* don't report nested selectors in `rule-empty-line-before` ([9847e60](https://github.com/RimacTechnology/style-guide/commit/9847e60eccfa17e961b82d4d1a2af0892659cf9b))

## [1.1.1](https://github.com/RimacTechnology/style-guide/compare/v1.1.0...v1.1.1) (2022-11-17)


### Bug Fixes

* ignore fonts for `value-keyword-case` ([022e68f](https://github.com/RimacTechnology/style-guide/commit/022e68faf0e6e0ad0200baf6299635d4cbe82273))

# [1.1.0](https://github.com/RimacTechnology/style-guide/compare/v1.0.5...v1.1.0) (2022-11-16)


### Features

* stylelint setup ([1215298](https://github.com/RimacTechnology/style-guide/commit/121529873a3981ded0366b659f2ca535957ce9fc))

## [1.0.5](https://github.com/RimacTechnology/style-guide/compare/v1.0.4...v1.0.5) (2022-11-14)

## [1.0.4](https://github.com/RimacTechnology/style-guide/compare/v1.0.3...v1.0.4) (2022-11-10)

## [1.0.3](https://github.com/RimacTechnology/style-guide/compare/v1.0.2...v1.0.3) (2022-11-08)


### Bug Fixes

* ignore constructor for explicit member accessiblity ([58bbde8](https://github.com/RimacTechnology/style-guide/commit/58bbde8ccffff9d184cc36b626ae933c3d7fc465))

## [1.0.2](https://github.com/RimacTechnology/style-guide/compare/v1.0.1...v1.0.2) (2022-11-07)

## [1.0.1](https://github.com/RimacTechnology/style-guide/compare/v1.0.0...v1.0.1) (2022-11-07)


### Bug Fixes

* include files properly ([28a0c31](https://github.com/RimacTechnology/style-guide/commit/28a0c31b6e21fcae2b70b417180a7f9ee52d1fca))

# 1.0.0 (2022-11-07)


### Features

* initial commit ([ce20833](https://github.com/RimacTechnology/style-guide/commit/ce208339adfe67612d6e5f8c71260b89d6bffc40))
