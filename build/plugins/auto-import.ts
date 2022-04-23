import AutoImport from 'unplugin-auto-import/vite'

// https://github.com/antfu/unplugin-auto-import
export default AutoImport({
  imports: [
    'vue',
    'vue-router',
    'vue-i18n',
    'vue/macros',
    '@vueuse/head',
    '@vueuse/core',
  ],
  dts: 'src/typings/auto-imports.d.ts',
})
