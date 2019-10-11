module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    "globals": {
        "$": true,
        'GOBEAR_ENV': true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: [
        'standard',
        'plugin:vue/strongly-recommended'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "space-before-function-paren": ["error", {
            "anonymous": "ignore",
            "named": "ignore",
            "asyncArrow": "ignore"
        }],
        "no-eval": ["error", { "allowIndirect": true }], // default is false
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
        "vue/name-property-casing": ["error", "kebab-case"],
        "vue/max-attributes-per-line": 0,
        "vue/require-default-prop": 0,
        "vue/html-self-closing": 0,
        "vue/valid-template-root": 0
    }
}
