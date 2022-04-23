import path from 'path'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

// https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
export default VueI18n({
  runtimeOnly: true,
  compositionOnly: true,
  include: [path.resolve(__dirname, '../../locales/**')],
})
