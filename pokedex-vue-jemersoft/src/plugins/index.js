import vuetify from './vuetify'
import pinia from '../store'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(pinia)
}
