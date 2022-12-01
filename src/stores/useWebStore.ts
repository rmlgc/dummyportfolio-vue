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
        webTitle: 'Dummyportfolio-vue',
        webLoading: false,
        webError: null,
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
        },
    },
})