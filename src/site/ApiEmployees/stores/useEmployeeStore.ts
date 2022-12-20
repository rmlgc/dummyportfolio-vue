import {defineStore} from 'pinia'

const totalEmployees = 800
const rows = 10

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
            this.loading = true;
            let urlApi = `https://hub.dummyapis.com/employee?noofRecords=${rows}&idStarts=0`;
            const employees = await fetch(urlApi)
                .then((response) => response.json())
            this.employees = employees
            this.loading = false;
        }
    }
})