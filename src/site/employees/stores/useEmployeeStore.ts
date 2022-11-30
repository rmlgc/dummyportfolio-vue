import {defineStore} from 'pinia';

export const useEmployeeStore = defineStore({
    id: 'employee',
    state: () => ({
        loading: false,
        error: null,
    }),
    getters: {
    },
    actions: {

    },
})