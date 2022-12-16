import {defineStore} from 'pinia'
import {usePostStore} from './usePostStore'

export const useAuthorStore = defineStore({
    id: 'author',
    state: () => ({
        authors: []
    }),
    getters: {
        getPostAuthor: (state) => {
            const postStore = usePostStore()
            const {post} = postStore;
            const {userId} = <any>post;
            return state.authors.find((author: any) => author.id === userId)
        }
    },
    actions: {
        async fetchAuthors() {
            this.authors = await fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
        }
    }
})