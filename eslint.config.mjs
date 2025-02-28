import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    // Your custom configs here

).overrideRules({
    'vue/first-attribute-linebreak': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@stylistic/indent': 'off',
    '@stylistic/eol-last': 'off',
})
