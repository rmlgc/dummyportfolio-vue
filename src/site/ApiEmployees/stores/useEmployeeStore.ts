import {defineStore} from 'pinia'

export const useEmployeeStore = defineStore({
    id: 'Employee',
    state: () => ({
        employees: [],
        employee: null,
        loading: false,
        error: null
    }),
    getters: {
    },
    actions: {
    }
})