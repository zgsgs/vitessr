import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://github.com/antfu/unplugin-vue-components
export default Components({
  // allow auto load markdown components under `./src/components/`
  extensions: ['vue', 'md'],
  // allow auto import and register components used in markdown
  include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  resolvers: [NaiveUiResolver(), IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' })],
  dts: 'types/components.d.ts',
})
