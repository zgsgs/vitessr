import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default (srcPath: string) => {
  return Icons({
    compiler: 'vue3',
    customCollections: {
      custom: FileSystemIconLoader(`${srcPath}/assets/svg`),
    },
    scale: 1,
    defaultClass: 'inline-block',
  })
}
