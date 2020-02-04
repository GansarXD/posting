import index from "@/store";

export default {
    state: {
        posts: []
    },
    getters: {
        POSTS(state) {
            return state.posts;
        }
    },
    mutations: {
        SET_POST(state, payload) {
            state.posts.push({...payload});
        },
        REMOVE_POST(state, payload) {
            state.posts.splice(payload, 1);
        }
    },
    actions: {
        ASYNC_SET_POST(context, payload) {
            setTimeout(() => {
                context.commit('SET_POST', payload.postForm);
            },payload.timeoutDelay)
        },
        ASYNC_REMOVE_POST(context, payload) {
            setTimeout( ()=> {
                context.commit('REMOVE_POST', payload);
            }, 700)
        }
    }
}