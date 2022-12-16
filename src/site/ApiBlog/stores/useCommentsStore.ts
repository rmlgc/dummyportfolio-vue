import {defineStore} from 'pinia'
import {usePostStore} from './usePostStore'

export const useCommentStore = defineStore({
    id: 'comment',
    state: () => ({
        comments: []
    }),
    getters: {
        getPostComments: (state) => {
            const postSore = usePostStore()
            const {post: post1} = postSore;
            const {id} = <any>post1;
            return state.comments.filter((post : any) => post.postId === id)
        }
    },
    actions: {
        async fetchComments() {
            this.comments = await fetch('https://jsonplaceholder.typicode.com/comments')
                .then((response) => response.json())
        }
    }
})