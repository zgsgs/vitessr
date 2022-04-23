import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'

const markdownWrapperClasses = 'prose prose-sm m-auto text-left'

// https://github.com/antfu/vite-plugin-md
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
export default Markdown({
  wrapperClasses: markdownWrapperClasses,
  headEnabled: true,
  markdownItSetup(md) {
    // https://prismjs.com/
    md.use(Prism)
    md.use(LinkAttributes, {
      matcher: (link: string) => /^https?:\/\//.test(link),
      attrs: {
        target: '_blank',
        rel: 'noopener',
      },
    })
  },
})
