import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {
    Quasar,
    LocalStorage,
    SessionStorage,
    BottomSheet,
} from 'quasar'
import quasarLang from 'quasar/lang/es'
import quasarIconSet from 'quasar/icon-set/material-icons'
// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
import '@quasar/extras/material-symbols-sharp/material-symbols-sharp.css'

import iconSet from 'quasar/icon-set/fontawesome-v6'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
// A few examples for animations from Animate.css:
import '@quasar/extras/animate/fadeIn.css'
import '@quasar/extras/animate/fadeOut.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from './router'
import ScrollbarInit from "./plugins/vue-smooth-scrollbar/smooth-scrollbar.js"
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ScrollbarInit)
app.use(Quasar, {
    plugins: {
        LocalStorage,
        SessionStorage,
        BottomSheet
    }, // import Quasar plugins and add here
    lang: quasarLang,
    iconSet: quasarIconSet,
    /*
    config: {
      brand: {
        // primary: '#e46262',
        // ... or all other brand colors
      },
      notify: {...}, // default set of options for Notify Quasar plugins
      loading: {...}, // default set of options for Loading Quasar plugins
      loadingBar: { ... }, // settings for LoadingBar Quasar plugins
      // ..and many more (check Installation card on each Quasar component/directive/plugins)
    }
    */
})

app.mount('#app')
