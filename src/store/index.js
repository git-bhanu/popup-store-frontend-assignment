import { createStore } from "vuex";
import Actions from "@/store/modules/actions/index"

const store = createStore({
    modules : {
        actions: Actions,
    },
    state() {
        return {

        }
    },
    getters: {
    },
    actions: {
    },
    mutations: {
    }
})
export default store;
