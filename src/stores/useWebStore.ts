import {defineStore} from 'pinia';
import {Cookies, LocalStorage} from "quasar";

const storageSettingsWebsite = LocalStorage.getItem('settingsWebsite')
const settingsWebsite = {
// @ts-ignore
    leftDrawerOpen: storageSettingsWebsite ? storageSettingsWebsite.leftDrawerOpen : false,
    prefersColorScheme: 'auto'
}

export const useWebStore = defineStore({
    id: 'website',
    state: () => ({
        settingsWebsite,
        title:'Dummyportfolio-vue',
        loading: false,
        error: null,
    }),
    getters: {
        getSettingsWebsite(): any {
            return this.settingsWebsite
        },
    },
    actions: {
        settingsWebsiteToggle(key: string) {
            this.settingsWebsite.leftDrawerOpen = !this.settingsWebsite.leftDrawerOpen
            LocalStorage.set('settingsWebsite', settingsWebsite)
            console.log(settingsWebsite)
            // this.settingsCookie[key] = !this.settingsCookie[key]
            // Cookies.set('website', this.settingsCookie[key])
        },
    },
})