export default {
    state: {
        id: 0,
        posts: [],
        editMode: false
    },
    getters: {
        POSTS(state) {
            return state.posts;
        },
        EDIT_MODE(state) {
            return state.editMode;
        },
        ID(state) {
            return state.id;
        }
    },
    mutations: {
        SET_POST(state, payload) {
            state.id += 1;
            payload.id = state.id;
            console.log(payload.id);
            state.posts.push({...payload});
            console.log(state.posts)
        },
        REMOVE_POST(state, payload) {
            // console.log('payload id');
            // console.log(payload.id);
            state.posts.forEach((element) => {
                if(element.id === payload.id) {
                    // console.log('element id in state array');
                    // console.log(element.id);
                    state.posts.splice(state.posts.indexOf(element), 1);
                }
            })
        },
        UPDATE_POST(state, payload) {
            state.posts.forEach((element) => {
                if(element.id === payload.id) {
                    element.title = payload.title;
                    element.content = payload.content;
                }
            })
        },
        EDIT_MODE_ON(state) {
            state.editMode = true
        },
        EDIT_MODE_OFF(state) {
            state.editMode = false
        }
    },
    actions: {
        ASYNC_SET_POST(context, payload) {
            setTimeout(() => {
                context.commit('SET_POST', payload.creatingPostForm);
                // console.log(payload.creatingPostForm);
            },payload.createTimeoutDelay)
        },
        ASYNC_REMOVE_POST(context, payload) {
            setTimeout( ()=> {
                context.commit('REMOVE_POST', payload.deletingPostForm);
            }, 1500)
        },
        ASYNC_UPDATE_POST(context, payload) {
            setTimeout(() => {
                context.commit('UPDATE_POST', payload.editingPostForm);
            }, 1000)
        },
        ASYNC_EDIT_MODE_ON(context) {
            setTimeout(() => {
                context.commit('EDIT_MODE_ON')
            },500)
        },
        ASYNC_EDIT_MODE_OFF(context) {
            setTimeout(() => {
                context.commit('EDIT_MODE_OFF')
            }, 500)
        }
    }
}