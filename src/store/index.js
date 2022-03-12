import { createStore } from "vuex";
import Actions from "@/store/modules/actions/index"

const store = createStore({
    modules : {
        actions: Actions,
    },
    state() {
        return {
            addAction: false,
        }
    },
    getters: {
        addAction(state) {
            return state.addAction;
        }
    },
    mutations: {
        updateActionState(state, payload) {
            state.addAction = payload
        }
    },
    actions: {
        updateActionState(context, payload) {
            context.commit('updateActionState' ,payload)
        }
    }
})
export default store;
