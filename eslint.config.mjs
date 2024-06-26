import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  
).overrideRules({
  'vue/first-attribute-linebreak':'off'
})
