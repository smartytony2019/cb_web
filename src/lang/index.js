import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import { Locale } from 'vant'
// 引入英文语言包
import vantEnLocale from 'vant/es/locale/lang/en-US'
import vantZhLocale from 'vant/es/locale/lang/zh-CN'
import enLocale from './en'
import zhLocale from './zh'
import Config from '@/settings.js'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...vantEnLocale
  },
  zh: {
    ...zhLocale,
    ...vantZhLocale
  }
}
Locale.add(messages)
export function getLanguage() {
  // Read the language of the last page closed
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const language = (
    navigator.language || navigator.browserLanguage
  ).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return Config.language
}
const i18n = new VueI18n({
  // set locale
  // options: en | zh
  locale: getLanguage(),
  // set locale messages
  messages
})

export default i18n
