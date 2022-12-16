import {defineStore} from 'pinia'

export const usePostStore = defineStore({
    id: 'post',
    state: () => ({
        posts: [],
        post: null,
        loading: false,
        error: <any>null
    }),
    getters: {
        getPostsPerAuthor: (state) => {
            return (authorId: any) => state.posts.filter((post : any) => post.userId === authorId)
        }
    },
    actions: {
        async fetchPosts() {
            this.posts = []
            this.loading = true
            try {
                this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
                    .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        async fetchPost(id : any) {
            this.post = null
            this.loading = true
            try {
                this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        }
    }
})