import {defineStore} from 'pinia'

const totalEmployees = 800;
const rows = 8;
const results = 8;
const page = 1;
const seed = "f202a81e9a205851";
// const ApiUrl = `https://randomuser.me/api/?page=${page}&results=${results}&seed=${seed}`;

export const useEmployeeStore = defineStore({
    id: 'Employee',
    state: () => ({
        employeesAll: [],
        employees: [],
        employee: null,
        page:1,
        ApiUrl: `https://randomuser.me/api/?page=${page}&results=${results}&seed=${seed}`,
        loading: false,
        error: null
    }),
    getters: {
        getEmployeesAtScroll: async (state) => {
            page++;            
        }
    },
    actions: {
        async fetchEmployees() {
            if (this.employeesAll.length > 0) {
                this.page +=1;
                this.ApiUrl = `https://randomuser.me/api/?page=${this.page}&results=${results}&seed=${seed}`
            }else{
                this.loading = true;
            }
            let urlApi = this.ApiUrl;
            const fetchedEmployeesAll = await fetch(urlApi)
                .then((response) => response.json())
                this.employeesAll = fetchedEmployeesAll.results
                this.employees.push(... fetchedEmployeesAll.results)
                this.loading = false;

        }
    }
})