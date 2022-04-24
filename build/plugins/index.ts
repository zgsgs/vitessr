import type { ConfigEnv, PluginOption } from 'vite'
import autoImport from './auto-import'
import components from './components'
import html from './html'
import icons from './icons'
import inspect from './inspect'
import vueJsx from './jsx'
import layouts from './layouts'
import markdown from './markdown'
// import mock from './mock'
import pages from './pages'
import pwa from './pwa'
import unocss from './unocss'
import visualizer from './visualizer'
import vueI18n from './vue-i18n'
import vue from './vue'
import windicss from './windicss'

/**
 * vite插件
 * @param configEnv - 环境
 * @param srcPath - src路径
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(
  configEnv: ConfigEnv,
  srcPath: string,
  viteEnv: ImportMetaEnv,
): (PluginOption | PluginOption[])[] {
  const plugins = [
    autoImport,
    components,
    html(configEnv),
    icons(srcPath),
    inspect,
    vueJsx,
    layouts,
    markdown,
    // mock,
    pages,
    pwa,
    unocss,
    vueI18n,
    vue,
    windicss,
  ]

  if (configEnv.command === 'build' && viteEnv.VITE_VISUALIZER === 'true')
    plugins.push(visualizer)

  return plugins
}
