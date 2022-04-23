import Vue from '@vitejs/plugin-vue'

export default Vue({
  include: [/\.vue$/, /\.md$/],
  reactivityTransform: true,
})
