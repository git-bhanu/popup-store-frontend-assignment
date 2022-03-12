export default {
    addAction(context, payload) {
        context.commit('addAction', payload)
    },
    deleteAction(context, payload) {
        context.commit('deleteAction', payload)
    },
    inactiveAction(context, payload) {
        context.commit('inactiveAction', payload)
    },
}