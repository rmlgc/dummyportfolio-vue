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
        // getPostAuthor: (employeeId, state) => {
        //     return state.employees.find((employee) => employee.id === employeeId)
        // }
    },
    actions: {
        async fetchEmployees() {
            const employees = await fetch('/api/v1/employees')
                .then((response) => response.json())

            this.employees = employees.data
            console.log(this.employees)
        }
    }
})