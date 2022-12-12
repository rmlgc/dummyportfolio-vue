import {defineStore} from 'pinia'
import {symOutlinedBlurMedium} from "@quasar/extras/material-symbols-outlined";

export const useEmployeeStore = defineStore({
    id: 'Employee',
    state: () => ({
        employees: [],
        employee: null,
        loading: false,
        error: null
    }),
    getters: {
        // getPostAuthor: (employeeId, state) => {
        //     return state.employees.find((employee) => employee.id === employeeId)
        // }
    },
    actions: {
        async fetchEmployees() {
            // let urlApi = '/api/v1/employees';
            // if (window.location.host === 'rmlgc.github.io')
                let urlApi = 'https://hub.dummyapis.com/employee?';

            console.log('________________________')
            console.log(window.location.host)
            console.log(urlApi)
            console.log('________________________')
            const employees = await fetch(urlApi)
                .then((response) => response.json())
            console.log(employees)
            this.employees = employees
        }
    }
})